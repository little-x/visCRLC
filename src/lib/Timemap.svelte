<script>
  import * as d3 from "d3";
  import {onMount} from "svelte";

  let count = $state(0)
  const increment = () => {
      count += 1
  }

  const margin = {top: 80, right: 25, bottom: 30, left: 40},
  width = 450 - margin.left - margin.right,
  height = 450 - margin.top - margin.bottom;

  const rowHeight = 10;

  onMount(() =>{
    let svg = d3.select(".timemapDia")
      .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")")
      // .attr('fill','black')
    ;

    d3.csv("/data/GROUP_GL.csv")
      .then(d => {
        let chgData = d.filter(data => 
        data.IntervalStart != "" && data.IntervalStart != null )

        console.log(d => d.IntervalStart)

        let startYear = d3.min(chgData, d => +d.IntervalStart);
        let endYear = d3.max(chgData, d => +d.IntervalEnd);

        // if (startYear < 1830){
        //   startYear = 1830
        // }

        let xScale = d3.scaleLinear()
            .domain([startYear,endYear])
            .range([0,width]);  
            
        let yScale = d3.scaleLinear()
            .domain([d3.min(chgData, d => +d.GroupID),d3.max(chgData, d => +d.GroupID)])
            .range([0,height]);

        
        let color = d3.scaleLinear()
        .range(["black", "#69b3a2"])
        .domain([d3.min(chgData, d => +d.ChgRate),d3.max(chgData, d => +d.ChgRate)])

        svg.selectAll('rect')
          .data(chgData)
          .enter()
          .append('rect')
          .attr('x',d => xScale(d.IntervalStart))
          .attr('y',d => yScale(d.GroupID))
          .attr('height',rowHeight)
          .attr('width',d => xScale(d.IntervalEnd - d.IntervalStart + startYear))
          .attr('fill', d => color(+d.ChgRate))
      })
  })
    
</script>

<button onclick={increment}>
count is {count}
</button>
