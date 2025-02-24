<script lang="ts">
  const links = [
    {
      name: 'CxNxD Omega',
      link: 'https://opensea.io/collection/clones-never-die-omega-clonecraft',
    },
    {
      name: 'CxNxD Asset',
      link: 'https://opensea.io/collection/clones-never-die-asset-clonecraft',
    },
    {
      name: 'Amber',
      link: 'https://www.klaytnfinder.io/token/0x3bd0911e1c71f817f402b904b2fccc4e33b6db44',
    },
    {
      name: 'Nectar',
      link: 'https://www.klaytnfinder.io/token/0x39076d7a914017e04f6c0f67d88f4162625e8d1d',
    },
    {
      name: 'Mix',
      link: 'https://www.klaytnfinder.io/token/0xdd483a970a7a7fef2b223c3510fac852799a88bf',
    },
  ]
</script>

<div class="box">
  <div class="box-title">Collection Link</div>
  <div class="box-content">
    {#each links as item}
      <div class="link">
        {item.name}: <a href={item.link} target="_blank">{item.link}</a>
      </div>
    {/each}
  </div>
</div>

<style lang="scss">
  a {
    color: $active-color;
  }
  .box-content {
    display: flex;
    flex-direction: column;
    .link {
      margin-bottom: 20px;
      box-sizing: border-box;
    }
  }
</style>
