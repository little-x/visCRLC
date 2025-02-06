<script>
  import timemap from './assets/timemap.png'
  import Timemap from './lib/Timemap.svelte'
  import Clogo from '/Clogo.svg'
  import './assets/tufte.css'
</script>

<main>
  <header class="App-header">
    <img src={Clogo} class="logo" alt="logo" />
    <h1>
      Historical evolution of the Grayland Plains shoreline
    </h1>
  </header>

  <div class="content">
    <div class="timemap">
      <h2>TimeMap</h2>
      <Timemap />      
      <img src={timemap} id="timemapPic" alt="timemap"
      width=auto height=auto/>
    </div>
    <div class="plan">
      <h2>Historical shoreline plan</h2>
      <canvas id="planCanvas" width=auto height=auto 
              style="border:1px solid #000000;">
      </canvas>
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
