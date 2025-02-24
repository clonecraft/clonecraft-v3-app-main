<script lang="ts">
  export let content: string
</script>

<div class="box">
  <box class="box-title"> Info </box>
  <div class="box-content">{content}</div>
</div>

<style lang="scss">
  .box-content {
    white-space: pre;
    font-size: 16px;
    line-height: 28px;
    background-color: rgba(0, 0, 0, 0.65);
  }
</style>
