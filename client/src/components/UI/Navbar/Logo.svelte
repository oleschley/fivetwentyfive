
<style lang="scss">
    @import '../../../../styles/_theme.scss';

    .logo {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(4, 1fr);
        justify-content: stretch;
        align-content: stretch;
        grid-gap: 1px;
        padding: 5px;
    }

    .primary {
        background-color: $color-primary;
    }

    .secondary {
        background-color: $color-secondary;
    }

    .gray {
        background-color: $gray-dark;
    }
</style>


<div class='logo'>
  <div class='primary'></div>
  <div class='primary'></div>
  <div class='primary'></div>
  <div class='primary'></div>
  <div class='gray'></div>
  <div class='gray'></div>
  <div class='gray'></div>
  <div class='primary'></div>
  <div class='secondary'></div>
  <div class='secondary'></div>
  <div class='gray'></div>
  <div class='primary'></div>
  <div class='secondary'></div>
  <div class='secondary'></div>
  <div class='gray'></div>
  <div class='primary'></div>
  <div class='primary'></div>
</div>
