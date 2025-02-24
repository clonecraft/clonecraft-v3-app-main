<script lang="ts">
  export let modalState: boolean
</script>

{#if modalState}
  <div class="modal-background" />
{/if}

<style lang="scss">
  .modal-background {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0);
    z-index: 10000;
    cursor: wait;
  }
</style>
