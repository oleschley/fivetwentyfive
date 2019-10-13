<style>

  .navbar {
    position: sticky;
    top: 1rem;
    display: grid;
    height: 2.5rem;
    grid-template-columns: 2.5rem 1fr;
    grid-auto-flow: column;
    grid-gap: 1rem;
    font-size: 1.1rem;
  }

</style>

<script>
  import Logo from './Navbar/Logo.svelte'
  import NavItems from './Navbar/Items.svelte'
</script>

<div class="navbar">
  <Logo/>
  <NavItems/>
</div>
