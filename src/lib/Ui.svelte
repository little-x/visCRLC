<script>
    import { onMount, afterUpdate } from 'svelte';
    
    // Match the prop names with what you're passing from Scene.svelte
    export let shorelines; // Changed from shorelineLayers to match your Scene.svelte
    export let changeRatePolygons;
    export let years;
    export let chgRate; // This was missing in your UI component but you're passing it
    
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
      const intervals = new Set();
      
      // Only process if changeRatePolygons is defined
      if (changeRatePolygons) {
        Object.keys(changeRatePolygons).forEach(groupId => {
          Object.keys(changeRatePolygons[groupId] || {}).forEach(interval => {
            intervals.add(interval);
          });
        });
        
        intervals.forEach(interval => {
          changeRateVisibility[interval] = true;
        });
      }
      
      changeRateVisibility = {...changeRateVisibility}; // Force reactivity
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
      
      shorelineVisibility[year] = !shorelineVisibility[year];
      shorelines[year]?.forEach(item => {
        item.visible = shorelineVisibility[year];
      });
      shorelineVisibility = {...shorelineVisibility}; // Force reactivity
    }
    
    function toggleChangeRate(interval) {
      if (!changeRatePolygons) return;
      
      changeRateVisibility[interval] = !changeRateVisibility[interval];
      Object.keys(changeRatePolygons).forEach(groupId => {
        if (changeRatePolygons[groupId][interval]) {
          changeRatePolygons[groupId][interval].object.visible = changeRateVisibility[interval];
        }
      });
      changeRateVisibility = {...changeRateVisibility}; // Force reactivity
    }
  </script>
  
  <div class="controls-container">
    <div class="control-section">
      <h2>Shoreline Years</h2>
      {#each years || [] as year}
        <button on:click={() => toggleShoreline(year)} class="control-button">
          {shorelineVisibility[year] ? `Hide ${year}` : `Show ${year}`}
        </button>
      {/each}
    </div>
    
    <div class="control-section">
      <h2>Change Rate Intervals</h2>
      {#each Object.keys(changeRateVisibility) as interval}
        <button on:click={() => toggleChangeRate(interval)} class="control-button">
          {changeRateVisibility[interval] ? `Hide Interval ${interval}` : `Show Interval ${interval}`}
        </button>
      {/each}
    </div>
  </div>
  
  <style>
    /* .controls-container {
      position: absolute;
      top: 10px;
      right: 10px;
      background: rgba(0, 0, 0, 0.7);
      color: white;
      padding: 10px;
      border-radius: 5px;
      max-width: 300px;
      z-index: 100;
    } */
    
    .control-section {
      margin-bottom: 15px;
    }
    
    .control-button {
      margin: 4px;
      padding: 6px 12px;
      background: #444;
      color: white;
      border: none;
      border-radius: 3px;
      cursor: pointer;
    }
    
    .control-button:hover {
      background: #666;
    }
    
    h2 {
      margin-top: 0;
      font-size: 16px;
      margin-bottom: 8px;
    }
  </style>