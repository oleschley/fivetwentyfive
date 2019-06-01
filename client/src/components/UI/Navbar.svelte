<style>

    header {
        background: var(--red-bright);
        color: var(--grey-light);
        text-align: center;
        text-transform: lowercase;
        position: fixed;
        width: 100%;
        height: 3.5rem;
        display: grid;
        grid-template-columns: 3fr 1fr 6fr;
        justify-items: start;
        align-items: center;
        box-shadow: 0 2px lightgrey;
    }

    h1 { padding: 0 .25rem;}

    .logo {
        grid-column: 1 / 2;
    }

    nav {
        grid-column: 3 / -1;
        background: var(--red-bright);
    }

    nav ul {
        list-style: none;
        display: flex;
        justify-content: flex-end;
    }

    nav li {
        margin-left: 3em;
    }

    nav a {
        color: var(--grey-light);
        text-decoration: none;
        font-size: 1.2em;
    }

    nav a::before {
        content: '';
        display: block;
        height: 3px;
        background: var(--grey-light);
        position: absolute;
        top: -.4em;
        left: 0;
        right: 0;
        border-radius: 1px;
    }

</style>


<header>
    <h1 class="logo">.525</h1>
    <nav>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Data Viz</a></li>
            <li><a href="#">Nutrition</a></li>
            <li><a href="#">Training</a></li>
        </ul>
    </nav>
</header>

