<script>
  import './assets/tufte.css'
  import Scene from './lib/Scene.svelte';
  import { onMount } from 'svelte';

  // populate these with our dynamically loaded images
  let images = [];
  let crlcImages = []; 
  let isLoading = true;

  onMount(async () => {
    try {
      // Define image patterns to check
      const possiblePrefixes = ['WB_', 'CRLC_'];
      const possibleExtensions = ['.jpg', '.jpeg', '.png', '.webp'];
      const maxImages = 20; 
      
      let willapaBayImages = [];
      let columbiaRiverImages = [];
      
      // Check for all possible image combinations
      for (let i = 1; i <= maxImages; i++) {
        for (const prefix of possiblePrefixes) {
          for (const ext of possibleExtensions) {
            const fileName = `${prefix}${i}${ext}`;
            const imagePath = `./img-wb/${fileName}`;
            
            // Check if image exists
            const exists = await checkImageExists(imagePath);
            
            if (exists) {
              const imageData = {
                src: imagePath,
                alt: `${prefix.startsWith('CRLC') ? 'Columbia River Littoral Cell' : 'Willapa Bay'} - Image ${i}`,
                fileName: fileName
              };
              
              // Sort into appropriate array based on prefix
              if (prefix.startsWith('CRLC')) {
                columbiaRiverImages.push(imageData);
              } else {
                willapaBayImages.push(imageData);
              }
              break; // Move to the next number once we found a match
            }
          }
        }
      }
      
      // Sort images by filename
      if (willapaBayImages.length > 0) {
        images = sortImages(willapaBayImages);
        console.log(`Found ${willapaBayImages.length} Willapa Bay images`);
      } else {
        images = [{ src: './img-wb/WB_5.jpg', alt: 'Willapa Bay - Coastal features' }];
      }
      
      if (columbiaRiverImages.length > 0) {
        crlcImages = sortImages(columbiaRiverImages);
        console.log(`Found ${columbiaRiverImages.length} Columbia River images`);
      }
      
      isLoading = false;
      
    } catch (error) {
      console.error("Image loading error:", error);
      images = [{ src: './img-wb/WB_5.jpg', alt: 'Willapa Bay - Coastal features' }];
      isLoading = false;
    }
  });

  // Helper function to check if an image exists
  function checkImageExists(src) {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = src;
    });
  }
  
  // Helper function to sort images by filename
  function sortImages(imageArray) {
    return imageArray.sort((a, b) => 
      a.fileName.localeCompare(b.fileName, undefined, { numeric: true })
    );
  }

  // Handle any image load errors
  function handleImageError(index, imgArray) {
    console.error(`Image failed to load: ${imgArray[index].src}`);
    imgArray[index].src = "https://placehold.co/200x150?text=Image+Not+Found";
    if (imgArray === images) {
      images = [...images]; 
    } else {
      crlcImages = [...crlcImages];
    }
  }
</script>

<main>
  <header class="App-header">
    <h1>
      Historical Evolution of the Grayland Plains Shoreline
    </h1>
  </header>

  <div class="content">
    <div class="scene">
      <Scene />
    </div>
    <div class="description">
      <div class="about">
        <h2>About</h2>
        <p>
          This visualization explores coastal science communication, adapted from the study
          <a href="https://www.sciencedirect.com/science/article/pii/S002532271000068X" target="_blank">
           Historical evolution of the Columbia River littoral cell (Kaminsky et al., 2010)</a>.
        </p>
        <p>
          Special thanks to Washington Department of Ecology for providing the data of historic shorelines and change rates.
        </p>
        <p>
          The source code of this site can be found at 
          <a href="https://github.com/little-x/visCRLC" target="_blank">
            GitHub Repository: visCRLC
          </a>
        </p>
        
        <!-- CRLC Images Gallery -->
        {#if crlcImages.length > 0}
          <div class="image-gallery">
            {#each crlcImages as image, i}
              <div class="gallery-item">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  on:error={() => handleImageError(i, crlcImages)}
                />
              </div>
            {/each}
      </div>
      {:else}
      <p>Loading images...</p>
    {/if}
      </div>
      <div class="other">
        <h2>Other Resources</h2>
        <p>
          <a href="https://figshare.com/articles/figure/North_Willapa_Bay_Shoreline_Erosion_and_Dune_Restoration_Graphics/28281572/1?file=52014599" target="_blank">
            North Willapa Bay Shoreline Erosion and Dune Restoration Graphics (Balderas Guzmán et al. 2025)</a>
        </p>
        
        <!-- Willapa Bay Images Gallery -->
        <div class="image-gallery">
          {#if isLoading}
            <p>Loading images...</p>
          {:else}
            {#each images as image, i}
              <div class="gallery-item">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  on:error={() => handleImageError(i, images)}
                />
              </div>
            {/each}
          {/if}
        </div>
      </div>
    </div>
  </div>
  <footer>
    <p>- Xiao, 2025</p>
  </footer>
</main>

