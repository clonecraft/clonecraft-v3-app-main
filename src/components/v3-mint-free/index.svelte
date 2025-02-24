<script lang="ts">
  import { onMount } from 'svelte'
  import {
    freeSaleMint,
    getFreeSaleCount,
    getFreeSaleCountPerAddress,
    getSaleEpoch,
  } from '@/blockchain/contracts/V3Sale'

  onMount(async () => {
    if (window.klaytn !== undefined && window.klaytn._kaikas.isEnabled()) {
      saleEpoch = await getSaleEpoch()
      freeSaleCount = calcFreeSaleCount(await getFreeSaleCount(saleEpoch))
      isFreeMint = await getFreeSaleCountPerAddress(saleEpoch, window.klaytn.selectedAddress)
    }
  })

  let freeSaleCount: any = ''
  let saleEpoch: any = null
  let isFreeMint: any = false

  async function omegaFreeSaleMint() {
    saleEpoch = await getSaleEpoch()
    try {
      await freeSaleMint()
      freeSaleCount = calcFreeSaleCount(await getFreeSaleCount(saleEpoch))
      isFreeMint = await getFreeSaleCountPerAddress(saleEpoch, window.klaytn.selectedAddress)
      alert('Free Mint Success')
    } catch (error) {
      alert('Free Mint Failed')
    }
  }

  function calcFreeSaleCount(num: any) {
    return 10 - parseInt(num)
  }
</script>

<div class="box">
  <div class="box-title">CxNxD Omega Clone Free Mint</div>
  <div class="box-content">
    <div class="box-sub-wrap">
      <div class="box-sub-text">Today Mint Remaining Number: {freeSaleCount}</div>
      {#if isFreeMint === true}
        <div class="box-sub-text">Minting participation: participated</div>
      {:else}
        <div class="box-sub-text">Minting participation: No participate</div>
      {/if}
    </div>
    <button class="normal-button" on:click={() => omegaFreeSaleMint()}>Free Mint</button>
  </div>
</div>

<style lang="scss">
  .box {
    width: 60%;
    border: 1px solid $inline-color;
  }

  .box-title {
    border-bottom: 1px solid $inline-color;
  }

  .box-content {
    flex-direction: column;
    padding: 0px;
  }

  .box-sub-text {
    font-size: 18px;
    padding: 10px;
  }

  .box-sub-wrap {
    padding: 10px;
    display: flex;
    flex-direction: column;
  }

  .normal-button {
    display: flex;
    justify-content: center;
    font-size: 20px;
    padding: 20px;
    width: 100%;
    border: none;
    border-top: 1px solid $inline-color;
    box-sizing: border-box;
    font-family: 'Trajan Pro Bold';
  }
</style>
