<script lang="ts">
  import { beforeUpdate } from 'svelte'
  import { ethers } from 'ethers'
  import { klaytn } from '@/blockchain/chain/klaytn'
  import {
    equip,
    getAssetType,
    v3AssetIdsFromAssetTypes,
    getPayment,
  } from '@/blockchain/contracts/Equip'
  import { balanceOfAmber, approveOfAmber } from '@/blockchain/contracts/Amber'
  import { equipCA } from '@/blockchain/chain/address'
  import {
    selectedAssetList,
    selectedAsset,
    selectedV3,
    selectedV3Original,
    myV3List,
    myAssetList,
  } from '@/stores/index'
  import { getMyAssetList, getMyV3List } from '@/api/index'

  export let modalState: boolean
  export let omegaId: Number
  export let assetData: Array<Number>

  let unequipAssetListLength: any = 0
  let feePrice: any = 0
  let feePriceFormatEther: any = 0
  let equipButtonActive = false
  let approveButtonActive = false

  const initSelectedV3 = {
    id: null,
  }
  const initSlelctedAsset = {
    background: {
      id: null,
    },
    situation: {
      id: null,
    },
    weapon: {
      id: null,
    },
    body: {
      id: null,
    },
    tattoo: {
      id: null,
    },
    mouth: {
      id: null,
    },
    eyes: {
      id: null,
    },
    clothes: {
      id: null,
    },
    hat: {
      id: null,
    },
    accessory: {
      id: null,
    },
    mask: {
      id: null,
    },
    effect: {
      id: null,
    },
  }

  const keyTokenCA = '0xcee8faf64bb97a73bb51e115aa89c17ffa8dd167'
  const baseKeyTokenAmount = 100000
  const pathA = [
    '0xc6a2ad8cc6e4a7e08fc37cc5954be07d499e7654',
    '0xdd483a970a7a7fef2b223c3510fac852799a88bf',
  ]
  const pathB = ['0xc6a2ad8cc6e4a7e08fc37cc5954be07d499e7654']

  beforeUpdate(async () => {
    if (modalState) {
      const selectedAssetTypes = await getAssetType(assetData)
      const unequipAssetList = await v3AssetIdsFromAssetTypes(omegaId, selectedAssetTypes)
      unequipAssetListLength = unequipAssetList.length
      const keyTokenAmount = baseKeyTokenAmount * (assetData.length + unequipAssetListLength)
      const thisFeePrice = await getPayment(keyTokenCA, keyTokenAmount, pathA, pathB)
      feePriceFormatEther = ethers.utils.formatEther(thisFeePrice)
      feePrice = parseInt(feePriceFormatEther) + 1
      const thisAmberBalance = await balanceOfAmber()
      const thisAmberBalanceFormatEther = ethers.utils.formatEther(thisAmberBalance)
      feePrice = parseInt(feePriceFormatEther) + 1

      if (parseInt(thisAmberBalanceFormatEther) > feePrice) {
        approveButtonActive = true
      } else {
        alert('Not enough Amber')
      }
    }
  })

  async function init() {
    $selectedAssetList = []
    $selectedAsset = initSlelctedAsset
    $selectedV3 = initSelectedV3
    $selectedV3Original = initSelectedV3
    equipButtonActive = false
    modalState = false
    $myV3List = await getMyV3List(klaytn.selectedAddress)
    $myAssetList = await getMyAssetList(klaytn.selectedAddress)
  }

  async function amberApprove() {
    const thisFeePrice = ethers.utils.parseEther(feePrice.toString())
    try {
      await approveOfAmber(equipCA, thisFeePrice)
      equipButtonActive = true
    } catch (e) {
      alert('Approve Error')
    }
  }

  async function omegaEquip() {
    try {
      await equip(omegaId, assetData)
      alert('Equip Success')
      init()
    } catch (e) {
      console.log(e)
      alert('Equip Error')
    }
  }
</script>

{#if modalState}
  <div class="modal-background" on:click|self>
    <div class="box">
      <div class="box-title">Equip Confirm</div>
      <div class="box-content">
        <div class="content-wrap">
          <div class="content">
            <div class="content-title">Equip Asset</div>
            <div class="content-body">{assetData.length} ASS</div>
          </div>
          <div class="content">
            <div class="content-title">Unequip Asset</div>
            <div class="content-body">{unequipAssetListLength} ASS</div>
          </div>
          <div class="content">
            <div class="content-title">Total Fee</div>
            <div class="content-body">{parseFloat(feePriceFormatEther).toFixed(6)} Amber</div>
          </div>
        </div>
      </div>
      <div class="box-content">
        <div class="content-wrap">
          <div class="box-info">* $0.1 worth of amber per Asset will be charged as a fee.</div>
        </div>
      </div>
      <div class="button-wrap">
        {#if !equipButtonActive && approveButtonActive}
          <div class="normal-button" on:click={amberApprove}>Approve</div>
        {:else}
          <div class="unnormal-button">Approve</div>
        {/if}
        {#if equipButtonActive}
          <div class="normal-button" on:click={omegaEquip}>Equip</div>
        {:else}
          <div class="unnormal-button">Equip</div>
        {/if}
      </div>
    </div>
  </div>
{/if}

<style lang="scss">
  .modal-background {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 10000;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
  }
  .button-wrap {
    .normal-button {
      border: none;
      border-top: 1px solid $outline-color;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 15px;
      font-size: 20px;
      font-family: 'Trajan Pro Bold';
    }
    .unnormal-button {
      border: none;
      border-top: 1px solid $outline-color;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 15px;
      font-size: 20px;
      font-family: 'Trajan Pro Bold';
    }
  }
  .box {
    min-width: 800px;
    max-width: 800px;
  }

  .box-content {
    display: flex;
    flex-direction: column;
    .content-wrap {
      display: flex;
      justify-content: center;
      .content {
        display: flex;
        flex-direction: column;
        padding: 10px 30px 10px 30px;
        justify-content: center;
        align-items: center;
        .content-title {
          font-size: 20px;
          font-weight: 600;
        }
        .content-body {
          font-size: 30px;
          font-weight: 600;
          margin-top: 20px;
        }
      }
    }
  }
</style>
