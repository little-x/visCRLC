<script>
  import * as d3 from "d3";
    let count = $state(0)
    const increment = () => {
        count += 1
    }
</script>

<button onclick={increment}>
count is {count}
</button>
  