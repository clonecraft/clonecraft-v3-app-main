<script lang="ts">
  import { ethers } from 'ethers'
  import { onMount } from 'svelte'
  import { balanceOfKlay } from '@/blockchain/chain/klaytn'
  import { myKlayBalance } from '@/stores'
  import {
    saleMint,
    getSaleEpoch,
    getSalePrice,
    getSaleCountPerAddress,
  } from '@/blockchain/contracts/V3Sale'

  onMount(async () => {
    if (window.klaytn !== undefined && window.klaytn._kaikas.isEnabled()) {
      $myKlayBalance = ethers.utils.formatEther(await balanceOfKlay())
      mintSalePrice = await getSalePrice()
      saleEpoch = await getSaleEpoch()
      todayMySaleMintCount = calcSaleCountPerAddress(
        await getSaleCountPerAddress(saleEpoch, window.klaytn.selectedAddress)
      )
    }
  })

  let mintAmount: any = ''
  let mintSalePrice: any = ''
  let saleEpoch: any = null
  let todayMySaleMintCount: any = ''

  async function omegaSaleMint(amount: any) {
    saleEpoch = await getSaleEpoch()
    const thisPrice = (mintSalePrice * amount).toFixed(0)
    try {
      await saleMint(amount, thisPrice)
      mintAmount = ''
      todayMySaleMintCount = calcSaleCountPerAddress(
        await getSaleCountPerAddress(saleEpoch, window.klaytn.selectedAddress)
      )
      $myKlayBalance = ethers.utils.formatEther(await balanceOfKlay())
      alert('Mint Success')
    } catch (error) {
      alert('Mint Failed')
    }
  }

  function calcSaleCountPerAddress(num: any) {
    return 9 - parseInt(num)
  }
</script>

<div class="box">
  <div class="box-title">CxNxD Omega Clone Mint</div>
  <div class="box-content">
    <div class="box-sub-wrap">
      <div class="box-sub-text">My Klay: {$myKlayBalance}</div>
      <div class="box-sub-text">Today My mint available number: {todayMySaleMintCount}</div>
      <input type="text" placeholder="Mint Amount" bind:value={mintAmount} />
    </div>
    <button class="normal-button" on:click={() => omegaSaleMint(mintAmount)}>Mint</button>
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

  input {
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
