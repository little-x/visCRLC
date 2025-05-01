<script>
  import Clogo from '/Clogo.svg'
  import './assets/tufte.css'
  import Scene from './lib/Scene.svelte';

  const margin = {top: 30, right: 25, bottom: 30, left: 40},
  width = 450 - margin.left - margin.right;

</script>

<main>
  <header class="App-header">
    <h1>
      Historical evolution of the Grayland Plains shoreline
    </h1>
  </header>

  <div class="content">
    <div class="scene">
      <Scene />
    </div>
    <div class="description">
      <h2>About</h2>
      <p>
        This visualization explores coastal science communication, based on the study
        <a href="https://www.sciencedirect.com/science/article/pii/S002532271000068X" target="_blank">
         Historical evolution of the Columbia River littoral cell</a>.
      </p>
      <p>
        Special thanks to Washington Department of Ecology for providing the data of historic shorelines and change rates.
      </p>
      <h3>Other Resources</h3>
      <li>
        <a href="https://figshare.com/articles/figure/North_Willapa_Bay_Shoreline_Erosion_and_Dune_Restoration_Graphics/28281572/1?file=52014599" target="_blank">North Willapa Bay Shoreline Erosion and Dune Restoration Graphics</a>
      </li>
    </div>
  </div>
  <footer>
    <p>- Xiao</p>
  </footer>
</main>

