<script>
  import * as d3 from "d3";
    let count = $state(0)
    const increment = () => {
        count += 1
    }

  const margin = {top: 80, right: 25, bottom: 30, left: 40},
  width = 450 - margin.left - margin.right,
  height = 450 - margin.top - margin.bottom;

  let svg = d3.select(".timemapDia")
    .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")")
  ;

  var color = d3.scaleLinear()
  .range(["white", "#69b3a2"])
  .domain([1,100])

  d3.csv("/data/GROUP_GL.csv")
    .then(d => {
      let intChg = d.filter(data => {
        return d.IntervalStart
      })
      svg.selectAll()
        .data(d)
    })

    
</script>

<button onclick={increment}>
count is {count}
</button>
