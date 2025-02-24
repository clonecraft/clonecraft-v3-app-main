<script lang="ts">
  export let name: string
  export let link: string

  import { push } from 'svelte-spa-router'
</script>

<div class="menu-item" on:click={() => push(link)}>
  <!-- <div class="menu-image-wrap">
    <img src="images/logo.jpg" alt="logo" />
  </div> -->
  <div class="menu-title">{name}</div>
</div>

<style lang="scss">
  .menu-item {
    display: flex;
    justify-content: center;
    padding: 20px;
    margin: 10px;
    height: 100px;
    width: 50%;
    height: auto;
    background-image: url('/images/background.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;
    box-sizing: border-box;
    border: 2px solid $inline-color;
    cursor: pointer;
    background-color: black;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .menu-item:hover {
    background-image: none;
    background-color: $inline-color;
  }

  .menu-item:active {
    background-image: none;
    background-color: $active-color;
  }

  /* .menu-image-wrap {
    width: 20%;
    img {
      width: 40%;
    }
  } */

  .menu-title {
    font-size: 30px;
  }
</style>
