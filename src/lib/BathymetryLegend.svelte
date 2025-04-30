<script>
  import * as d3 from 'd3';
  import { onMount } from 'svelte';

  // Props with default values
  export let minValue = 0;
  export let maxValue = 30;
  export let title = "Bathymetry (m)";
  export let description = "Light Blue = Shallow, Dark Blue = Deep";
  export let position = { bottom: '10px', left: '10px' };
  export let width = 240;
  export let height = 80;

  let svgElement;

  onMount(() => {
    // Create the colorscale using D3
    const colorScale = d3.scaleSequential(d3.interpolateRgb("#c8daf7", "#081a37"))
      .domain([minValue, maxValue]);

    // Select the SVG element
    const svg = d3.select(svgElement);

    // Add title
    svg.append("text")
      .attr("x", 0)
      .attr("y", 15)
      .attr("font-weight", "bold")
      .text(title);

    // Create gradient definition
    const defs = svg.append("defs");
    const gradient = defs.append("linearGradient")
      .attr("id", "bathymetry-gradient")
      .attr("x1", "0%")
      .attr("x2", "100%")
      .attr("y1", "0%")
      .attr("y2", "0%");

    // Add gradient stops
    const stops = 10;
    for (let i = 0; i <= stops; i++) {
      const offset = i / stops;
      const value = minValue + offset * (maxValue - minValue);
      gradient.append("stop")
        .attr("offset", `${offset * 100}%`)
        .attr("stop-color", colorScale(value));
    }

    const margin = { left: 10, right: 10, top: 20, bottom: 20 };
    // Draw the color rectangle
    svg.append("rect")
      .attr("x", margin.left)
      .attr("y", 30)
      .attr("width", width - margin.left - margin.right)
      .attr("height", 15)
      .style("fill", "url(#bathymetry-gradient)");

    // Add scale ticks
    const axisScale = d3.scaleLinear()
      .domain([minValue, maxValue])
      .range([margin.left, width - margin.right]);

    const axis = d3.axisBottom(axisScale)
      .ticks(5)
      .tickFormat(d3.format(".1f"));

    svg.append("g")
      .attr("transform", `translate(0, 45)`)
      .call(axis);

    // Add description
    svg.append("text")
      .attr("x", 0)
      .attr("y", height)
      .attr("font-size", "12px")
      .text(description);
  });
</script>

<div class="legend" style="bottom: {position.bottom}; left: {position.left};">
  <svg bind:this={svgElement} width={width} height={height}></svg>
</div>

<style>
  .legend {
    position: absolute;
    background: rgba(255, 255, 255, 0.7);
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
</style>
