  // Process model to identify shoreline layers by year
  const processLayers = (model) => {
    // Reset the layers object
    shorelines = {};

    // Initialize with empty arrays for each year
    years.forEach((year) => {
      shorelines[year] = [];
    });

    // Traverse the shoreline parent to find shoreline layers
    model.traverse((object) => {
      if (object.isMesh || object.isGroup || object.isLine) {
        // Look for year identifiers in the object name
        years.forEach((year) => {
          if (object.name.startsWith(year.toString())) {
            shorelines[year].push(object);

            // Initially hide all layers except the first year
            // object.visible = year === years[0]; // Show only the first year by default
            object.visible = true; // Set all layers to be visible for now
            // console.log(`"${object.name}"`);
          }
        });
      }

      // Find all shoreline curve and set them to be highest render order
      if (object.name.includes("_shoreline")) {
        object.renderOrder = 100;
        if (object.material) {
          object.material.depthTest = false;
        }
      }
    })

    // console.log('Processed shoreline layers:', shorelines);
  };

  const findChangeRatePolygons = (model) => {
    changeRatePolygons = {};
    
    model.traverse(object => {
      // Check if this is a mesh and has a name that matches our pattern
      if (object.isMesh || object.isGroup) {
        // Parse the name to extract group ID, interval, start year, and end year
        // Format: {groupId}_int{intervalNumber}_s{startYear}_e{endYear}
        const nameParts = object.name.split('_');
        if (nameParts.length >= 4) {
          const groupId = nameParts[0];
          
          // Extract interval number from "int{number}"
          const intervalMatch = nameParts[1].match(/int(\d+)/);
          if (!intervalMatch) return;
          const intervalNumber = intervalMatch[1];
          
          // Extract start year from "s{year}"
          const startYearMatch = nameParts[2].match(/s(\d+)/);
          if (!startYearMatch) return;
          const startYear = startYearMatch[1];
          
          // Extract end year from "e{year}"
          const endYearMatch = nameParts[3].match(/e(\d+)/);
          if (!endYearMatch) return;
          const endYear = endYearMatch[1];
          
          // If we don't have this group in our dictionary yet, create it
          if (!changeRatePolygons[groupId]) {
            changeRatePolygons[groupId] = {};
          }
          
          // Store the object reference
          changeRatePolygons[groupId][intervalNumber] = {
            object: object,
            startYear: startYear,
            endYear: endYear
          };
          
          // Initially hide all change rate polygons
          object.visible = true;
        }
      }
    });
    
    console.log('Found change rate polygons:', changeRatePolygons);
  };
