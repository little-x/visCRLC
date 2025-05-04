<script>
    import { onMount } from 'svelte';
    
    // Match the prop names with what you're passing from Scene.svelte
    export let shorelines; // Changed from shorelineLayers to match your Scene.svelte
    export let changeRatePolygons;
    export let years;
    export let chgRate; 
    export let bathymetryObjects; // Add a prop for bathymetry objects
    
    // Store visibility of shoreline years
    let shorelineVisibility = {};
    
    // Store visibility of change rate intervals
    let changeRateVisibility = {};
    
    let bathyVisibility = true; // Track bathymetry visibility
    
    // Make this reactive to prop changes
    $: if (years && shorelines) {
      initShorelineVisibility();
    }
    
    $: if (changeRatePolygons) {
      initChangeRateVisibility();
    }
    
    function initShorelineVisibility() {
      // Reset or initialize shoreline visibility
      years.forEach(year => {
        // Check if shorelines is defined and has the year
        if (shorelines && shorelines[year] && shorelines[year].length > 0) {
          shorelineVisibility[year] = shorelines[year][0].visible;
        } else {
          // Default to true if data isn't available yet
          shorelineVisibility[year] = true;
        }
      });
      shorelineVisibility = {...shorelineVisibility}; // Force reactivity
    }
    
    function initChangeRateVisibility() {
      // Reset or initialize change rate visibility
      const intervals = Object.keys(changeRatePolygons);

      intervals.forEach(interval => {
        let isVisible = false;

        // Check if any group within this interval is visible
        Object.keys(changeRatePolygons[interval]).forEach(groupId => {
          if (changeRatePolygons[interval][groupId].object.visible) {
            isVisible = true;
          }
        });

        changeRateVisibility[interval] = isVisible;
      });

      changeRateVisibility = { ...changeRateVisibility }; // Force reactivity
    }
    
    onMount(() => {
      // These will run after DOM is mounted, but props may not be ready yet
      if (years && shorelines) {
        initShorelineVisibility();
      }
      
      if (changeRatePolygons) {
        initChangeRateVisibility();
      }
    });
    
    function toggleShoreline(year) {
      if (!shorelines || !shorelines[year]) return;

      // Toggle visibility for the selected year
      shorelineVisibility[year] = !shorelineVisibility[year];
      shorelines[year].forEach(item => {
        item.visible = shorelineVisibility[year];
      });

      shorelineVisibility = { ...shorelineVisibility }; // Force reactivity
    }
    
    function toggleChangeRate(interval) {
      if (!changeRatePolygons) return;

      // Deactivate all other intervals
      Object.keys(changeRateVisibility).forEach(i => {
        changeRateVisibility[i] = false;
        Object.keys(changeRatePolygons[i]).forEach(groupId => {
          changeRatePolygons[i][groupId].object.visible = false;
        });
      });

      // Activate the selected interval
      changeRateVisibility[interval] = true;
      Object.keys(changeRatePolygons[interval]).forEach(groupId => {
        changeRatePolygons[interval][groupId].object.visible = true;
      });

      // Update shoreline visibility based on the interval's start and end years
      const groupIds = Object.keys(changeRatePolygons[interval] || {});
      if (groupIds.length > 0) {
        const firstGroup = changeRatePolygons[interval][groupIds[0]];
        const startYear = firstGroup.startYear;
        const endYear = firstGroup.endYear;

        years.forEach(year => {
          shorelineVisibility[year] = year >= startYear && year <= endYear;
          if (shorelines[year]) {
            shorelines[year].forEach(item => {
              item.visible = shorelineVisibility[year];
            });
          }
        });
      }

      changeRateVisibility = { ...changeRateVisibility }; // Force reactivity
      shorelineVisibility = { ...shorelineVisibility }; // Force reactivity
    }
    
    function toggleBathymetry() {
      bathyVisibility = !bathyVisibility;
      bathymetryObjects?.forEach(obj => {
        obj.visible = bathyVisibility;
      });
    }

    function getIntervalLabel(interval) {
      const groupIds = Object.keys(changeRatePolygons[interval] || {});
      if (groupIds.length > 0) {
        const firstGroup = changeRatePolygons[interval][groupIds[0]];
        return `${firstGroup.startYear}-${firstGroup.endYear}`;
      }
      return `Interval ${interval}`;
    }
      // Calculate the proportional position of each year along the timeline
  function getYearPosition(year) {
    const minYear = Math.min(...years);
    const maxYear = Math.max(...years);
    return ((year - minYear) / (maxYear - minYear)) * 100;
  }

  </script>
  
  <div class="controls-container">
    <div class="control-section">
      <h2>Shoreline Years</h2>
      <div class="control-buttons">
        {#each years || [] as year}
          <button 
            on:click={() => toggleShoreline(year)} 
            class="control-button {shorelineVisibility[year] ? 'visible' : 'hidden'}">
            <!-- style="left: {getYearPosition(year)}%;"> -->
            {year}
          </button>
        {/each}
      </div>
    </div>
    
    <div class="control-section">
      <h2>Intervals</h2>
      <div class="control-buttons">
        {#each Object.keys(changeRateVisibility) as interval}
          <button 
            on:click={() => toggleChangeRate(interval)} 
            class="control-button {changeRateVisibility[interval] ? 'visible' : 'hidden'}">
            {getIntervalLabel(interval)}
          </button>
        {/each}
      </div>
    </div>

    <div class="control-section">
      <h2>Bathymetry</h2>
      <div class="control-buttons">
        <button 
          on:click={toggleBathymetry} 
          class="control-button {bathyVisibility ? 'visible' : 'hidden'}">
          {bathyVisibility ? 'Hide' : 'Show'} Bathymetry
        </button>
      </div>
    </div>
  </div>
  
  <style>
    .controls-container {
      display: flex;
      flex-direction: column;
      background: rgba(0, 0, 0, 0.7);
      color: white;
      padding: 10px;
      border-radius: 5px;
      z-index: 100;
      gap: 10px;
    }
    
    .control-section {
      display: flex;
      flex-direction: row;
      align-items: flex-start; /* Align items at the top */
      gap: 10px;
    }
    
    .control-section h2 {
      margin: 0;
      font-size: 16px;
      width: 100px; /* Fixed width to align all headings */
      text-align: left;
    }
    
    .control-buttons {
      display: flex;
      flex-direction: row;
      gap: 4px; /* Add spacing between buttons */
    }
    
    .control-button {
      padding: 6px 12px;
      background: #444;
      color: white;
      border: none;
      border-radius: 3px;
      cursor: pointer;
      transition: color 0.3s ease, background 0.3s ease;
      text-align: left; 
    }
    
    .control-button.visible {
      color: white;
      background: #333;
    }
    
    .control-button.hidden {
      color: rgba(255, 255, 255, 0.3);
      background: #333; 
    }
    
    .control-button:hover {
      background: #666;
    }
  </style>