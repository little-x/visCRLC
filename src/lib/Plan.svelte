<script>
  import * as d3 from "d3";
  import {onMount} from "svelte";

  const {margin, width} = $props();
  const height = 900 - margin.top - margin.bottom;



  d3.json('/data/shore.geojson')
    .then(json => {
      // console.log(json)

      let svg = d3.select(".plan")
        .append('svg')
          .attr("width", width + margin.left + margin.right)
          .attr("height", height + margin.top + margin.bottom)
        .append("g")
          .attr("transform",
              "translate(" + margin.left + "," + margin.top + ")")

      const path = d3.geoPath()
        .projection(d3.geoAlbersUsa());
    
      svg.selectAll('path')
        .data(json.features)
        .enter()
        .append('path')
        .attr('d',path)
        .attr('fill','steelblue')
        .attr('stroke','black')
    }
    )

</script>

<canvas id="planCanvas" {width} {height} 
style="border:1px solid #000000;">

</canvas>
