<style lang="scss">
    @import '../../styles/_theme.scss';

    .logo {
        grid-area: logo;
        line-height: .75;
        font-size: 6rem;
        font-family: $font-header;
        text-transform: uppercase;

        .primary {
            color: $color-primary;
        }

        .secondary {
            color: $color-secondary;
        }
    }

    .subtitle {
        font-size: 2rem;
        letter-spacing: 0.5rem;
        padding-top: .5rem;
        padding-left: 1rem;
    }
</style>

<div class="logo">
    <div class="primary">:data</div>
    <div class="secondary">:design</div>
    <div>:naruhodo</div>
    <p class="subtitle">data visualizations</p>
</div>
