<script lang="ts">
  import { paxSwapCA } from '@/blockchain/chain/address'
  import { balanceOfPax, approvePax } from '@/blockchain/contracts/Pax'
  import { balanceOfNectar } from '@/blockchain/contracts/Nectar'
  import { swap } from '@/blockchain/contracts/PaxSwap'
  import { onMount } from 'svelte'
  import { ethers } from 'ethers'

  let myPaxBalance = ''
  let myNectarBalance = ''
  let swapAmount = ''

  onMount(async () => {
    if (window.klaytn !== undefined && window.klaytn._kaikas.isEnabled()) {
      myPaxBalance = ethers.utils.formatEther(await balanceOfPax())
      myNectarBalance = ethers.utils.formatEther(await balanceOfNectar())
    }
  })

  function maxAmount() {
    swapAmount = myPaxBalance
  }

  async function paxswap() {
    const amount = ethers.utils.parseEther(swapAmount)
    await approvePax(paxSwapCA, amount)
    await swap(amount)
    swapAmount = ''
    myPaxBalance = ethers.utils.formatEther(await balanceOfPax())
    myNectarBalance = ethers.utils.formatEther(await balanceOfNectar())
  }
</script>

<div class="box">
  <div class="box-title">kpax swap to nectar</div>
  <div class="box-content">
    <div class="box-sub-wrap">
      <div class="info-wrap">
        <div class="token-name">My Kpax : {myPaxBalance}</div>
      </div>
      <div class="info-wrap">
        <div class="token-name">My Nectar : {myNectarBalance}</div>
      </div>
      <div class="line" />
      <div class="form-wrap">
        <input type="text" placeholder="Swap Amount" bind:value={swapAmount} />
        <div class="max-btn" on:click={maxAmount}>MAX</div>
      </div>
    </div>
    <div class="button-wrap">
      <button class="normal-button" style="width: 100%; font-size: 22px;" on:click={paxswap}
        >Swap</button
      >
    </div>
  </div>
</div>

<style lang="scss">
  .max-btn {
    cursor: pointer;
  }
  .box {
    width: 60%;
  }
  .box-content {
    padding: 0px;
    flex-direction: column;
  }
  .button-wrap {
    display: flex;
    .normal-button {
      font-size: 14px;
      width: 50%;
    }
  }
  .box-sub-wrap {
    display: flex;
    flex-direction: column;
    padding: 20px;
  }
  .info-wrap {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    .token-name {
      font-size: 18px;
      width: auto;
      padding: 10px;
    }
  }
  .form-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    input {
      width: 100%;
      padding: 10px;
      margin: 10px;
      border: 1px solid $inline-color;
      height: 30px;
      font-size: 18px;
      background: none;
      background-color: rgba(0, 0, 0, 0.65);
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      color: $text-color;
    }
  }
</style>
