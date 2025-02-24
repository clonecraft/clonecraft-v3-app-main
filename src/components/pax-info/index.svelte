<script lang="ts">
  import { getSwapAmount, getInitAmount } from '@/blockchain/contracts/PaxSwap'
  import { onMount } from 'svelte'
  import { ethers } from 'ethers'

  let remainPax: string = '0'
  let progressPercent: string = '0'

  onMount(async () => {
    if (window.klaytn !== undefined && window.klaytn._kaikas.isEnabled()) {
      const initAmount = ethers.utils.formatEther(await getInitAmount())
      const swapAmount = ethers.utils.formatEther(await getSwapAmount())
      remainPax = (Number(initAmount) - Number(swapAmount)).toString()
      progressPercent = ((Number(swapAmount) / Number(initAmount)) * 100).toString()
    }
  })
</script>

<div class="box">
  <div class="box-title">PAX Swap Info</div>
  <div class="box-content">
    <div class="box-sub-text">remaining pax : {remainPax}</div>
    <div class="box-sub-text">Swap Progress : {progressPercent}%</div>
    <div class="box-sub-text">Polygon Pax Swap to KPAX : Gaia Bridge (현재 사용 불가)</div>
  </div>
</div>

<style lang="scss">
  .box {
    width: 60%;
  }

  .box-content {
    flex-direction: column;
  }

  .box-sub-text {
    font-size: 18px;
    padding: 10px;
    a {
      color: #fff;
      text-decoration: underline;
    }
  }
</style>
