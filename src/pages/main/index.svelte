<script lang="ts">
  import Menu from '@/components/menu-button/index.svelte'

  interface MenuInfo {
    name: string
    link: string
  }

  const menuData: Array<MenuInfo> = [
    // 개발중
    {
      name: 'Omega Mint',
      link: '/omega-mint',
    },
    {
      name: 'Omega Equip',
      link: '/equip',
    },
    {
      name: 'Amber',
      link: '/amber',
    },
    {
      name: 'Pax swap to Nectar',
      link: '/pax',
    },
    {
      name: 'Collection',
      link: '/collection',
    },
  ]
</script>

<div class="wrap">
  <div class="title-wrap">
    <div class="title">Clones Never Die</div>
    <div class="sub-title">- omega -</div>
  </div>
  {#each menuData as item}
    <Menu name={item.name} link={item.link} />
  {/each}
</div>

<style lang="scss">
  .title-wrap {
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .title {
      font-size: 50px;
      font-family: 'Trajan Pro Bold';
      margin-bottom: 20px;
    }
    .sub-title {
      font-size: 30px;
      font-family: 'Trajan Pro Bold';
    }
  }
</style>
