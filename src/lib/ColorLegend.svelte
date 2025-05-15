<script>
  import * as d3 from 'd3';
  import { onMount } from 'svelte';

  // Props for Bathymetry Legend
  export let bathymetryMinValue = 0;
  export let bathymetryMaxValue = 30;
  export let bathymetryTitle = "Bathymetry (m)";
  export let bathymetryDescription = "Light Blue = Shallow, Dark Blue = Deep";

  // Props for Change Rate Legend
  export let changeRateMinValue = -50;
  export let changeRateMaxValue = 50;
  export let changeRateTitle = "Change Rate (m/yr)";
  export let changeRateDescription = "Red = Erosion, Blue = Accretion";

  export let width = 240;
  export let height = 80;

  // Props for Label Type Legend
  export let showLabelLegend = true;
  export let labelTypes = [
    { type: 2, label: "Infrastructure", class: "label-type-2" },
    { type: 3, label: "Historic Sites", class: "label-type-3" }
  ];

  let bathymetrySvgElement;
  let changeRateSvgElement;

  onMount(() => {
    // Bathymetry Legend
    const bathymetryColorScale = d3.scaleSequential(d3.interpolateRgb("#c8daf7", "#081a37"))
      .domain([bathymetryMinValue, bathymetryMaxValue]);

    const bathymetrySvg = d3.select(bathymetrySvgElement);

    bathymetrySvg.append("text")
      .attr("x", 0)
      .attr("y", 15)
      .attr("font-weight", "bold")
      .text(bathymetryTitle);

    const bathymetryDefs = bathymetrySvg.append("defs");
    const bathymetryGradient = bathymetryDefs.append("linearGradient")
      .attr("id", "bathymetry-gradient")
      .attr("x1", "0%")
      .attr("x2", "100%")
      .attr("y1", "0%")
      .attr("y2", "0%");

    for (let i = 0; i <= 10; i++) {
      const offset = i / 10;
      const value = bathymetryMinValue + offset * (bathymetryMaxValue - bathymetryMinValue);
      bathymetryGradient.append("stop")
        .attr("offset", `${offset * 100}%`)
        .attr("stop-color", bathymetryColorScale(value));
    }

    const bathymetryMargin = { left: 10, right: 10, top: 20, bottom: 20 };
    bathymetrySvg.append("rect")
      .attr("x", bathymetryMargin.left)
      .attr("y", 30)
      .attr("width", width - bathymetryMargin.left - bathymetryMargin.right)
      .attr("height", 15)
      .style("fill", "url(#bathymetry-gradient)");

    const bathymetryAxisScale = d3.scaleLinear()
      .domain([bathymetryMinValue, bathymetryMaxValue])
      .range([bathymetryMargin.left, width - bathymetryMargin.right]);

    const bathymetryAxis = d3.axisBottom(bathymetryAxisScale)
      .ticks(5)
      .tickFormat(d3.format(".1f"));

    bathymetrySvg.append("g")
      .attr("transform", `translate(0, 45)`)
      .call(bathymetryAxis);

    bathymetrySvg.append("text")
      .attr("x", 0)
      .attr("y", height)
      .attr("font-size", "12px")
      .text(bathymetryDescription);

    // Change Rate Legend
    const changeRateColorScale = d3.scaleSequential(d3.interpolateRdYlBu)
      .domain([changeRateMinValue, changeRateMaxValue]);

    const changeRateSvg = d3.select(changeRateSvgElement);

    changeRateSvg.append("text")
      .attr("x", 0)
      .attr("y", 15)
      .attr("font-weight", "bold")
      .text(changeRateTitle);

    const changeRateDefs = changeRateSvg.append("defs");
    const changeRateGradient = changeRateDefs.append("linearGradient")
      .attr("id", "change-rate-gradient")
      .attr("x1", "0%")
      .attr("x2", "100%")
      .attr("y1", "0%")
      .attr("y2", "0%");

    for (let i = 0; i <= 10; i++) {
      const offset = i / 10;
      const value = changeRateMinValue + offset * (changeRateMaxValue - changeRateMinValue);
      changeRateGradient.append("stop")
        .attr("offset", `${offset * 100}%`)
        .attr("stop-color", changeRateColorScale(value));
    }

    const changeRateMargin = { left: 10, right: 10, top: 20, bottom: 20 };
    changeRateSvg.append("rect")
      .attr("x", changeRateMargin.left)
      .attr("y", 30)
      .attr("width", width - changeRateMargin.left - changeRateMargin.right)
      .attr("height", 15)
      .style("fill", "url(#change-rate-gradient)");

    const changeRateAxisScale = d3.scaleLinear()
      .domain([changeRateMinValue, changeRateMaxValue])
      .range([changeRateMargin.left, width - changeRateMargin.right]);

    const changeRateAxis = d3.axisBottom(changeRateAxisScale)
      .ticks(5,".1f")

    changeRateSvg.append("g")
      .attr("transform", `translate(0, 45)`)
      .call(changeRateAxis);

    changeRateSvg.append("text")
      .attr("x", 0)
      .attr("y", height)
      .attr("font-size", "12px")
      .text(changeRateDescription);
  });
</script>

<div class="legend">
  <!-- <svg bind:this={bathymetrySvgElement} width={width} height={height}></svg> -->
  <svg bind:this={changeRateSvgElement} width={width} height={height}></svg>
  <div class="no-data-legend">
    <div class="no-data-color"></div>
    <span>No Data</span>
  </div>
  
  {#if showLabelLegend}
    <div class="label-legend">
      {#each labelTypes as item}
        <div class="label-legend-item">
          <div class="label-symbol {item.class}"></div>
          <span>{item.label}</span>
        </div>
      {/each}
    </div>
  {/if}
</div>

<style>
  .legend {
    display: flex;
    flex-direction: column;
    gap: 10px;
    position: absolute;
    bottom: 10px;
    right: 10px;
    background: rgba(255, 255, 255, 0.7);
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }

  svg {
    margin-bottom: 10px;
  }

  .no-data-legend {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 12px;
    margin-top: 5px;
  }

  .no-data-color {
    width: 15px;
    height: 15px;
    background-color: #bec4c1;
    border: 1px solid #000;
  }

  /* Label legend styles */
  .label-legend {
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-top: 10px;
    border-top: 1px solid rgba(0, 0, 0, 0.2);
    padding-top: 10px;
  }

  .label-legend-item {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 12px;
  }

  .label-symbol {
    width: 8px;
    height: 8px;
    border-radius: 50%;
  }

  .label-symbol.label-type-2 {
    background-color: rgba(150, 150, 150, 0.8);
    border: 5px solid rgba(0, 0, 0, 0.5);
  }

  .label-symbol.label-type-3 {
    background-color: rgba(150, 150, 150, 0.8);
    border: 2px solid rgba(0, 0, 0, 0.5);
  }
</style>