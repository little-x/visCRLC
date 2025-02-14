<script>
  import * as d3 from "d3";
  import {onMount} from "svelte";

  const {margin, width} = $props();
  const height = 450 - margin.top - margin.bottom;

  
</script>

<canvas id="planCanvas" {width} {height} 
style="border:1px solid #000000;">
</canvas>
