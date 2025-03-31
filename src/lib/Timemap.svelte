<script>
  import * as d3 from "d3";
  import {onMount} from "svelte";

  let count = $state(0)
  const increment = () => {
      count += 1
  }

  const {margin, width} = $props();
  const height = 450 - margin.top - margin.bottom;
  const rowHeight = 10;

  onMount(() =>{

    d3.csv("/data/GROUP_GL.csv")
      .then(d => {
        let chgData = d.filter(data => 
        data.intervalStart != "" && data.intervalStart != null )

        chgData = cleanOverlap(chgData, "groupID")

        // console.log(chgData)
        // JS array manipulation!
        // console.log(chgData.map(d => d.intervalStart));

        let startYear = d3.min(chgData, d => +d.intervalStart);
        let endYear = d3.max(chgData, d => +d.intervalEnd);

        if (startYear < 1830){
          startYear = 1850
        }

        let xScale = d3.scaleLinear()
            .domain([startYear,endYear])
            .range([0,width]);  
            
        let yScale = d3.scaleLinear()
            .domain([d3.min(chgData, d => +d.groupID),d3.max(chgData, d => +d.groupID)])
            .range([0,height]);

        // color based on coast change rate
        let color = d3.scaleLinear()
        .range(["red", "#69b3a2"])
        .domain([d3.min(chgData, d => +d.chgRate),d3.max(chgData, d => +d.chgRate)])
  
        var Tooltip = d3.select(".timemapDia")
        .append("div")
        .style("opacity", 0)
        .attr("class", "tooltip")
        .style("background-color", "white")
        .style("border", "solid")
        .style("border-width", "2px")
        .style("border-radius", "5px")
        .style("padding", "5px")

        // Three function that change the tooltip when user hover / move / leave a cell
        var mouseover = function(d) {
          Tooltip
            .style("opacity", 1)
          d3.select(this)
            .style("stroke", "black")
            .style("opacity", 1)
        }
        var mousemove = function(event,d) {
          Tooltip
            .html("Erosion rate: " + +d.chgRate)
            .style("left", (d3.pointer(this)[0]+70) + "px")
            .style("top", (d3.pointer(this)[1]) + "px")
        }
        var mouseleave = function(d) {
          Tooltip
            .style("opacity", 0)
          d3.select(this)
            .style("stroke", "none")
            .style("opacity", 0.8)
        }

        let svg = d3.select(".timemapDia")
        .append("svg")
          .attr("width", width + margin.left + margin.right)
          .attr("height", height + margin.top + margin.bottom)
        .append("g")
          .attr("transform",
              "translate(" + margin.left + "," + margin.top + ")")

        // timemap body
        svg.selectAll('rect')
          .data(chgData)
          .enter()
          .append('rect')
            .attr('x',d => xScale(d.intervalStart))
            .attr('y',d => yScale(d.groupID))
            .attr('height',rowHeight)
            .attr('width',d => xScale(d.intervalEnd - d.intervalStart + startYear))
            .attr('fill', d => color(+d.chgRate))
            .attr('stroke','white')
          .on("mouseover", mouseover)
          .on("mousemove", mousemove)
          .on("mouseleave", mouseleave)

          const xAxis = d3.axisTop().scale(xScale).ticks()
          const yAxis =d3.axisRight().scale(yScale).ticks()

          svg.append('g')
            .call(xAxis)
            .attr('transform','translate(0,0)')
          // .append('g')
          //   .call(yAxis)
          //   .attr('transform','translate(0)')
          .selectAll('text')
            .attr("transform", "translate(-20,10)rotate(-45)")

      })
  })

  // delete overlapped interval
  function cleanOverlap(data, groupBy){
    let processData = d3.groups(data, d => d[groupBy])
    let cleanData = [];
    
    processData.forEach(([groupID, groups]) => {
      groups.sort((a,b) => (a.intervalStart - b.intervalStart))
      let curr = groups[0];

      for (let j = 1; j<groups.length; j++){
        const next = groups[j];

        if (next.intervalStart >= curr.intervalEnd){
          cleanData.push(curr)
          curr = next
        } else {
          curr = {
            intervalStart: Math.min(curr.intervalStart, next.intervalStart),
            intervalEnd: Math.min(curr.intervalEnd, next.intervalEnd),
            ...curr
          }
        }
      }
      cleanData.push(curr)
    })
    return cleanData
  } 

</script>

<button onclick={increment}>
count is {count}
</button>
