<script>
  import * as d3 from "d3";
  import {onMount} from "svelte";
  
  const {margin, width} = $props();
  const height = 450 - margin.top - margin.bottom;

  onMount(() => {
    d3.csv("/data/GROUP_GL.csv")
      .then( d => {
        let chgData = d.filter(data => data.year >= 1850)

        let startDist = d3.min(chgData, d => +d.distFrO);
        let endDist = d3.max(chgData, d => +d.distFrO);

        let startYear = d3.min(chgData, d => +d.year);
        let endYear = d3.max(chgData, d => +d.year);

        let xScale = d3.scaleLinear()
            .domain([startDist,endDist])
            .range([width,0]);  
        let yScale = d3.scaleLinear()
            .domain([d3.min(chgData, d => +d.groupID),
                     d3.max(chgData, d => +d.groupID)])
            .range([0,height]);

        let svg = d3.select(".chart")
        .append('svg')
          .attr("width", width + margin.left + margin.right)
          .attr("height", height + margin.top + margin.bottom)
        .append("g")
          .attr("transform",
              "translate(" + margin.left + "," + margin.top + ")")

        let colorRates = d3.scaleLinear()
        .range(["red", "#69b3a2"])
        .domain([d3.min(chgData, d => +d.chgRates),d3.max(chgData, d => +d.chgRates)])

        let colorYear = d3.scaleLinear()
        .range(['blue','orange'])
        .domain([startYear,endYear])

        svg.selectAll('circle')
            .data(chgData)
            .enter()
            .append('circle')
            .attr('cx',d => xScale(d.distFrO))
            .attr('cy',d => yScale(d.groupID))
            .attr('r', 2)
            // .attr('fill',d=>colorRates(d.chgRates))
            .attr('fill',d=>colorYear(d.year))

        const xAxis = d3.axisTop().scale(xScale).ticks()
        const yAxis =d3.axisRight().scale(yScale).ticks()

        svg.append('g')
            .call(xAxis)
            .attr('transform','translate(0,'+(height-margin)+')')
          .append('g')
            .call(yAxis)
            .attr('transform','translate(0)')
          .selectAll('text')
            .attr("transform", "translate(-20,10)rotate(-45)")
            // .style("text-anchor", "end")
      })
  })
      
</script>