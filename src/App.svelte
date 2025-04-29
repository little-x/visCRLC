<script>
  import Clogo from '/Clogo.svg'
  import './assets/tufte.css'
  import Scene from './lib/Scene.svelte';
  import ColorLegend from './lib/ColorLegend.svelte';


  const margin = {top: 30, right: 25, bottom: 30, left: 40},
  width = 450 - margin.left - margin.right;

</script>

<main>
  <header class="App-header">
    <img src={Clogo} class="logo" alt="logo" />
    <h1>
      Historical evolution of the Grayland Plains shoreline
    </h1>
  </header>

  <div class="content">
  
    <div class="scene">
      <Scene />
      <ColorLegend />
    </div>
  </div>
  <footer>
    <!-- <p>Thanks</p> -->
    <p>- Xiao</p>
  </footer>
</main>

<style>
  .logo {
    height: 10vmin;
    padding: 1em;
    pointer-events: none;
    will-change: filter;
    transition: filter 300ms;
  }

  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }

</style>
