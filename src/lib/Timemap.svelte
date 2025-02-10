<script>
  import * as d3 from "d3";
    let count = $state(0)
    const increment = () => {
        count += 1
    }

  const margin = {top: 80, right: 25, bottom: 30, left: 40},
  width = 450 - margin.left - margin.right,
  height = 450 - margin.top - margin.bottom;

  const rowHeight = 10;

  let svg = d3.select(".timemapDia")
    .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")")
    // .attr('fill','black')
  ;

  var color = d3.scaleLinear()
  .range(["white", "#69b3a2"])
  .domain([1,100])

  d3.csv("/data/GROUP_GL.csv")
    .then(d => {
      let chgData = d.filter(data => 
      data.IntervalStart != "" && data.IntervalStart != null )
      // console.log(chgData)

      let xScale = d3.scaleLinear()
          .domain([d3.min(chgData, d => d.IntervalStart),d3.max(chgData, d => d.IntervalEnd)])
          .range([0,width]);  
          
      let yScale = d3.scaleLinear()
          .domain([d3.min(chgData, d => d.GroupID),d3.max(chgData, d => d.GroupID)])
          .range([0,height]);

      // console.log(chgData.map(d => d.GroupID))

      svg.selectAll('rect')
        .data(chgData)
        .enter()
        .append('rect')
        .attr('x',xScale(chgData.IntervalStart))
        .attr('y',yScale(chgData.GroupID))
        .attr('height',rowHeight)
        .attr('width',chgData.IntervalEnd - chgData.IntervalStart)
        .attr('fill',color(chgData.ChgRate))
    })

    
</script>

<button onclick={increment}>
count is {count}
</button>
