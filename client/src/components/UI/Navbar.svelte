<style>

  .navbar {
    display: grid;
    grid-template-columns: 1fr 4fr 3fr;
    grid-template-areas: "brand items misc";
    border-radius: 1px;
    align-items: center;
    justify-items: stretch;
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

<div class="navbar primary">
  <a href="."><img class="navbar-brand" src="images/temple-small.jpg" alt="temple brand"></a>
  <ul class="navbar-items">
    <li><a href="training" class="navbar-item">training</a></li>
    <li><a href="nutrition" class="navbar-item">nutrition</a></li>
    <li><a href="visuals" class="navbar-item">visuals</a></li>
  </ul>
</div>