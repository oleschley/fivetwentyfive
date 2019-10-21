<script>
    export let h
</script>

<style lang="scss">
    @import '../../../../styles/_theme.scss';

    line {
        stroke: $gray-dark;
        stroke-width: 0.5;
    }

</style>

<g>
    <line y2={h}/>
</g>