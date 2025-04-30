<script>
    import { onMount } from 'svelte';
    
    // Match the prop names with what you're passing from Scene.svelte
    export let shorelines; // Changed from shorelineLayers to match your Scene.svelte
    export let changeRatePolygons;
    export let years;
    export let chgRate; 
    
    // Store visibility of shoreline years
    let shorelineVisibility = {};
    
    // Store visibility of change rate intervals
    let changeRateVisibility = {};
    
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

      // Deactivate all other years
      Object.keys(shorelineVisibility).forEach(y => {
        shorelineVisibility[y] = false;
        shorelines[y]?.forEach(item => {
          item.visible = false;
        });
      });

      // Activate the selected year
      shorelineVisibility[year] = true;
      shorelines[year]?.forEach(item => {
        item.visible = true;
      });

      shorelineVisibility = { ...shorelineVisibility }; // Force reactivity
    }
    
    function toggleChangeRate(interval) {
      if (!changeRatePolygons) return;

      changeRateVisibility[interval] = !changeRateVisibility[interval];

      // Update visibility for all groups in this interval
      Object.keys(changeRatePolygons[interval]).forEach(groupId => {
        changeRatePolygons[interval][groupId].object.visible = changeRateVisibility[interval];
      });

      changeRateVisibility = { ...changeRateVisibility }; // Force reactivity
    }
  </script>
  
  <div class="controls-container">
    <div class="control-section">
      <h2>Shoreline Years</h2>
      {#each years || [] as year}
        <button 
          on:click={() => toggleShoreline(year)} 
          class="control-button {shorelineVisibility[year] ? 'visible' : 'hidden'}">
          {year}
        </button>
      {/each}
    </div>
    
    <div class="control-section">
      <h2>Intervals</h2>
      {#each Object.keys(changeRateVisibility) as interval}
        <button 
          on:click={() => toggleChangeRate(interval)} 
          class="control-button {changeRateVisibility[interval] ? 'visible' : 'hidden'}">
          Interval {interval}
        </button>
      {/each}
    </div>
  </div>
  
  <style>
    .controls-container {
      display: flex;
      flex-direction: row;
      background: rgba(0, 0, 0, 0.7);
      color: white;
      padding: 10px;
      border-radius: 5px;
      max-width: 400px;
      z-index: 100;
      gap: 10px;
    }
    
    .control-section {
      display: flex;
      flex-direction: column;
      margin: 5px;
    }
    
    .control-button {
      margin: 4px;
      padding: 6px 12px;
      background: #444;
      color: white;
      border: none;
      border-radius: 3px;
      cursor: pointer;
      transition: color 0.3s ease, background 0.3s ease;
    }
    
    .control-button.visible {
      color: white;
      background: #444;
    }
    
    .control-button.hidden {
      color: rgba(255, 255, 255, 0.5); /* Faded color for hidden state */
      background: #333; /* Slightly darker background for hidden state */
    }
    
    .control-button:hover {
      background: #666;
    }
    
    h2 {
      margin-top: 5px;
      font-size: 16px;
      margin-bottom: 8px;
    }
  </style>