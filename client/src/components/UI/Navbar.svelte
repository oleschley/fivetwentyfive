<style>

  .navbar {
    display: grid;
    grid-template-columns: 1fr 4fr 3fr;
    grid-template-areas: "brand items misc";
    border-radius: 1px;
    align-items: center;
    justify-items: stretch;
    font-size: 1.1rem;
  }

  .navbar-brand {
    grid-area: brand;
    width: 3rem;
    height: 3rem;
    margin: .5rem;
    padding-right: .5rem;
    border-radius: 1px;
  }

  .navbar-items {
    grid-area: items;
    display: grid;
    grid-template-columns: repeat(4, minmax(80px, 1fr));
    justify-items: start;
    list-style: none;
  }

  .navbar-item {
    display: inline;
    color: white;
  }

</style>

<script>
  const nav_items = ['training', 'nutrition', 'visuals']
</script>

<div class="navbar primary">
  <a href="."><img class="navbar-brand" src="images/temple-small.jpg" alt="temple brand"></a>
  <ul class="navbar-items">
    {#each nav_items as item}
      <li><a href={item} class="navbar-item">{item}</a></li>
    {/each}
  </ul>
</div>