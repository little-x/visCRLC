<script>
    import { onMount } from 'svelte';
    import * as THREE from 'three';
    let {shorelines, shorelineSrf, changeRatePolygons, years, 
      chgRate, bathymetryObjects, transectObjects, parcelObjects, shorelineColorScale} = $props();

    // Store visibility of shoreline years and change rate intervals
    let shorelineVisibility = $state({});
    let changeRateVisibility = $state({});
    let bathyVisibility = $state(true); // Track bathymetry visibility
    let transectVisibility = $state(false); // Track transect visibility
    let parcelVisibility = $state(false); // Track parcel visibility
    let rateNumbersVisibility = $state(true); // Track change rate numbers visibility

    $effect(() => {
      // Initialize visibility states when shorelines or changeRatePolygons change
      if (years && shorelines) {
        initShorelineVisibility();
      }
      
      if (changeRatePolygons) {
        initChangeRateVisibility();
      }
    });

    function initShorelineVisibility() {
      // Reset or initialize shoreline visibility
      const newVisibility = {};
      years.forEach(year => {
        // Check if shorelines is defined and has the year
        if (shorelines && shorelines[year] && shorelines[year].length > 0) {
          newVisibility[year] = shorelines[year][0].visible;
        } else {
          // Default to true if data isn't available yet
          newVisibility[year] = true;
        }
      });
      shorelineVisibility = newVisibility; // Assign entire new object instead of mutation
    }
    
    function initChangeRateVisibility() {
      // Reset or initialize change rate visibility
      if (!changeRatePolygons) return;
      
      const intervals = Object.keys(changeRatePolygons);
      const newVisibility = {};

      intervals.forEach(interval => {
        let isVisible = false;

        // Check if any group within this interval is visible
        Object.keys(changeRatePolygons[interval]).forEach(groupId => {
          if (changeRatePolygons[interval][groupId].object.visible) {
            isVisible = true;
          }
        });

        newVisibility[interval] = isVisible;
      });

      changeRateVisibility = newVisibility; // Assign entire new object
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

      // Create a new object for reactivity
      const newVisibility = { ...shorelineVisibility };
      newVisibility[year] = !newVisibility[year];
      
      // Update the shoreline objects visibility
      shorelines[year].forEach(item => {
        item.visible = newVisibility[year];
      });
      
      // Get all currently visible years (including the one we just toggled)
      const visibleYears = Object.entries(newVisibility)
        .filter(([_, isVisible]) => isVisible)
        .map(([yr, _]) => parseInt(yr));
      
      // If we have visible years, find the most recent one
      if (visibleYears.length > 0) {
        const mostRecentYear = Math.max(...visibleYears);
        
        // Update all shoreline surfaces
        Object.keys(shorelineSrf).forEach(key => {
          // Extract year from the object name (assuming format: "YYYY_srf...")
          const yearMatch = key.match(/^(\d+)/);
          if (yearMatch) {
            const surfaceYear = parseInt(yearMatch[1]);
            // Only show the surface for the most recent visible year
            shorelineSrf[key].visible = surfaceYear === mostRecentYear && newVisibility[surfaceYear];
          }
        });
      } else {
        // If no shorelines are visible, show the most recent year's shoreline and surface
        const mostRecentYear = Math.max(...years);
        
        // Show the most recent shoreline
        if (shorelines[mostRecentYear]) {
          shorelines[mostRecentYear].forEach(item => {
            item.visible = true;
          });
          
          // Show the corresponding surface for the most recent year
          Object.keys(shorelineSrf).forEach(key => {
            const yearMatch = key.match(/^(\d+)/);
            if (yearMatch) {
              const surfaceYear = parseInt(yearMatch[1]);
              shorelineSrf[key].visible = surfaceYear === mostRecentYear;
            }
          });
          
          // Update visibility state
          newVisibility[mostRecentYear] = true;
        }
      }

      shorelineVisibility = newVisibility;
    }
    
    function toggleChangeRate(interval) {
      if (!changeRatePolygons) return;

      // Create new objects for reactivity
      const newChangeRateVisibility = { ...changeRateVisibility };
      const newShorelineVisibility = { ...shorelineVisibility };
      
      // Check if currently selected interval is already visible
      const isCurrentlyVisible = changeRateVisibility[interval];
      
      // Deactivate all intervals
      Object.keys(changeRatePolygons).forEach(i => {
        newChangeRateVisibility[i] = i === interval ? !isCurrentlyVisible : false;
        Object.keys(changeRatePolygons[i]).forEach(groupId => {
          changeRatePolygons[i][groupId].object.visible = i === interval ? !isCurrentlyVisible : false;
          
          // Toggle visibility of rate numbers based on both the interval visibility and rate numbers toggle
          if(changeRatePolygons[i][groupId].rateText) {
            changeRatePolygons[i][groupId].rateText.visible = 
              i === interval ? !isCurrentlyVisible && rateNumbersVisibility : false;
          }
        });
      });

      // If toggling off, show all shorelines that were previously visible
      if (isCurrentlyVisible) {
        // No changes to shoreline visibility when turning off an interval
      } else {
        // Turning on an interval - update shoreline visibility based on interval
        const groupIds = Object.keys(changeRatePolygons[interval] || {});
        if (groupIds.length > 0) {
          const firstGroup = changeRatePolygons[interval][groupIds[0]];
          const startYear = firstGroup.startYear;
          const endYear = firstGroup.endYear;

          // Track the most recent visible year to show its surface
          let mostRecentVisibleYear = null;

          years.forEach(year => {
            const shouldBeVisible = year >= startYear && year <= endYear;
            newShorelineVisibility[year] = shouldBeVisible;
            
            if (shorelines[year]) {
              shorelines[year].forEach(item => {
                item.visible = shouldBeVisible;
              });
            }

            if (shouldBeVisible) {
              if (mostRecentVisibleYear === null || year > mostRecentVisibleYear) {
                mostRecentVisibleYear = year;
              }
            }
          });

          // Update surface visibility for the most recent visible year
          if (mostRecentVisibleYear !== null) {
            Object.keys(shorelineSrf).forEach(key => {
              const yearMatch = key.match(/^(\d+)/);
              if (yearMatch) {
                const surfaceYear = parseInt(yearMatch[1]);
                shorelineSrf[key].visible = surfaceYear === mostRecentVisibleYear;
              }
            });
          }
        }
      }

      // Update states with new objects
      changeRateVisibility = newChangeRateVisibility;
      shorelineVisibility = newShorelineVisibility;
    }
    
    function toggleBathymetry() {
      bathyVisibility = !bathyVisibility;
      bathymetryObjects?.forEach(obj => {
        obj.visible = bathyVisibility;
      });
    }
    
    function toggleTransect() {
      transectVisibility = !transectVisibility;
      transectObjects?.forEach(obj => {
        obj.visible = transectVisibility;
      });
    }
    
    function toggleParcels() {
      parcelVisibility = !parcelVisibility;
      parcelObjects?.forEach(obj => {
        obj.visible = parcelVisibility;
      });
    }

    function toggleRateNumbers() {
      rateNumbersVisibility = !rateNumbersVisibility;
      
      // Only update numbers for the currently visible interval
      Object.keys(changeRatePolygons || {}).forEach(interval => {
        if (changeRateVisibility[interval]) {
          Object.keys(changeRatePolygons[interval]).forEach(groupId => {
            if (changeRatePolygons[interval][groupId].rateText) {
              changeRatePolygons[interval][groupId].rateText.visible = rateNumbersVisibility;
            }
          });
        }
      });
    }

    function getIntervalLabel(interval) {
      if (!changeRatePolygons || !changeRatePolygons[interval]) return `Interval ${interval}`;
      
      const groupIds = Object.keys(changeRatePolygons[interval]);
      if (groupIds.length > 0) {
        const firstGroup = changeRatePolygons[interval][groupIds[0]];
        return `${firstGroup.startYear}-${firstGroup.endYear}`;
      }
      return `Interval ${interval}`;
    }
    
    // Calculate the proportional position of each year along the timeline
    function getYearPosition(year) {
      if (!years || years.length === 0) return 0;
      const minYear = Math.min(...years);
      const maxYear = Math.max(...years);
      return ((year - minYear) / (maxYear - minYear)) * 100;
    }

    function getShorelineButtonStyle(year) {
      if (shorelineVisibility[year]) {
        // Use shorelineColorScale for visible buttons
        return `background-color: ${shorelineColorScale(year)}; color: ${getContrastColor(shorelineColorScale(year))};`;
      }
      return ''; // Default style for hidden buttons
    }
    
    // Helper function to determine if text should be black or white based on background color
    function getContrastColor(colorValue) {
      // Convert the color to RGB
      const color = new THREE.Color(colorValue);
      const r = color.r, g = color.g, b = color.b;
      
      // Calculate luminance - standard formula for perceived brightness
      const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
      
      // Return black for light backgrounds, white for dark backgrounds
      return luminance > 0.4 ? '#000' : '#fff';
    }
</script>

<div class="controls-container">
  <div class="control-section">
    <h2 class="annotated-title">
      Historic Shorelines
      <div class="annotation-box">Shorelines are calculated by eras</div>
    </h2>
    <div class="control-buttons">
      {#each years || [] as year}
        <button 
          onclick={() => toggleShoreline(year)} 
          class="control-button shoreline-button {shorelineVisibility[year] ? 'visible' : 'hidden'}"
          style={getShorelineButtonStyle(year)}>
          {year}
        </button>
      {/each}
    </div>
  </div>

  <div class="control-section">
    <h2 class="annotated-title">
      Change in Land Area
      <div class="annotation-box">Change rates are calculated for intervals</div>
    </h2>
    <div class="control-buttons">
      {#each Object.keys(changeRatePolygons || {}) as interval}
        <button 
          onclick={() => toggleChangeRate(interval)} 
          class="control-button {changeRateVisibility[interval] ? 'visible' : 'hidden'}">
          {getIntervalLabel(interval)}
        </button>
      {/each}
      <button 
        onclick={toggleRateNumbers}
        class="control-button {rateNumbersVisibility ? 'visible' : 'hidden'}">
        {rateNumbersVisibility ? 'Hide' : 'Show'} Rate Values
      </button>
    </div>
  </div>

  <!-- <div class="control-section">
    <h2>Bathymetry</h2>
    <div class="control-buttons">
      <button 
        on:click={toggleBathymetry} 
        class="control-button {bathyVisibility ? 'visible' : 'hidden'}">
        {bathyVisibility ? 'Hide' : 'Show'} Bathymetry
      </button>
    </div>
  </div> -->

  <div class="control-section">
    <h2 class="annotated-title">
      Visibility toggle
    </h2>
    <div class="control-buttons">
      <button 
        onclick={toggleTransect}
        class="control-button button-with-annotation {transectVisibility ? 'visible' : 'hidden'}"> 
        {transectVisibility ? 'Hide' : 'Show'} Transect
        <div class="button-annotation-box">Shorelines are transected into segments <br>
          for change rates calculation</div>
      </button>
      <button 
        onclick={toggleParcels}
        class="control-button {parcelVisibility ? 'visible' : 'hidden'}"> 
        {parcelVisibility ? 'Hide' : 'Show'} Parcels
      </button>
    </div>
  </div>
  
</div>

<div class="instructions">
  Click and drag to rotate the scene <br>
  Left button: orbit <br>
  Right button: pan <br>
</div>

<style>
  .controls-container {
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 10; /* Ensure the control is above the scene */
    display: flex;
    flex-direction: column;
    background: rgba(0, 0, 0, 0.4);
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
  
  .annotated-title {
    margin: 0;
    font-size: 16px;
    width: 120px; 
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

  .annotated-title {
    position: relative;
    display: inline-block;
  }

  .annotated-title:hover .annotation-box {
    display: block;
  }

  .annotation-box {
    display: none;
    position: absolute;
    top: 0;
    right: 105%; /* Position to the left of the container */
    background: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 5px 10px;
    border-radius: 3px;
    font-size: 16px;
    white-space: nowrap;
    z-index: 200;
    margin-right: 10px; /* Add spacing between the box and the container */
  }

  .button-with-annotation {
    position: relative;
  }

  .button-with-annotation:hover .button-annotation-box {
    display: block;
  }

  .button-annotation-box {
    display: none;
    position: absolute;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 5px 10px;
    border-radius: 3px;
    font-size: 14px;
    white-space: nowrap;
    z-index: 200;
    margin-right: 10px;
    width: max-content;
    top: 105%;
  }

  .instructions {
    font-size: 14px;
    color: rgba(127, 127, 127);
    position: absolute;
    top: 10px;
    left: 10px;
  }
</style>