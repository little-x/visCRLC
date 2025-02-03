<script>
  import svelteLogo from './assets/svelte.svg'
  import Clogo from '/Clogo.svg'
  import Counter from './lib/Counter.svelte'
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
    <h2>TimeMap</h2>

  </div>
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
