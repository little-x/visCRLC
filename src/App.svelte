<script>
  import timemapPic from './assets/timemap.png'
  import Timemap from './lib/Timemap.svelte'
  import Clogo from '/Clogo.svg'
  import './assets/tufte.css'
  import Plan from './lib/Plan.svelte';
  import Chart from './lib/Chart.svelte';
  import Scene from './lib/Scene.svelte';

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
    <!-- <div class="timemap">
      <h2>TimeMap</h2>
      <div class="timemapDia">  </div>
      <Timemap {margin} {width}/>
      <img src={timemapPic} id="timemapPic" alt="timemap" width=400 height=auto/>
    </div> -->

    <div class="chart">
      <h2>Change Chart</h2>
      <Chart {margin} {width}/>
    </div>

    <!-- <div class="plan">
      <h2>Historical shoreline plan</h2>
      <Plan {margin} {width}/>
    </div> -->
  
    <div class="scene">
      <Scene />
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
