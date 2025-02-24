<script lang="ts">
  import { ethers } from 'ethers'
  import { onMount } from 'svelte'
  import { balanceOfKlay } from '@/blockchain/chain/klaytn'
  import { balanceOfAmber } from '@/blockchain/contracts/Amber'
  import { balanceOfNectar } from '@/blockchain/contracts/Nectar'
  import { balanceOfMix } from '@/blockchain/contracts/Mix'
  import { myKlayBalance, myAmberBalance, myNectarBalance, myMixBalance } from '@/stores/index'

  onMount(async () => {
    if (window.klaytn !== undefined && window.klaytn._kaikas.isEnabled()) {
      $myKlayBalance = ethers.utils.formatEther(await balanceOfKlay())
      $myAmberBalance = ethers.utils.formatEther(await balanceOfAmber())
      $myNectarBalance = ethers.utils.formatEther(await balanceOfNectar())
      $myMixBalance = ethers.utils.formatEther(await balanceOfMix())
    }
  })
</script>

<div class="box">
  <div class="box-title">My crypto</div>
  <div class="box-content">
    <div class="box-sub-text">My Klay : {$myKlayBalance}</div>
    <div class="box-sub-text">My Amber : {$myAmberBalance}</div>
    <div class="box-sub-text">My Nectar : {$myNectarBalance}</div>
    <div class="box-sub-text">My Mix : {$myMixBalance}</div>
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
  }
</style>
