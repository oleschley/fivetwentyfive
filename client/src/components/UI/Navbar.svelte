<style>

  .navbar {
    position: sticky;
    display: grid;

    grid-template-columns: 3rem 1fr;
    grid-auto-flow: column;
    grid-gap: 1rem;
    font-size: 1.1rem;

    border-bottom: 1px solid var(--gray)
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
