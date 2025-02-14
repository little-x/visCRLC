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
