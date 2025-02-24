<script lang="ts">
  import { klaytn, connect } from '@/blockchain/chain/klaytn'
  import { isConnect, myAddress, myAssetList, myShortAddress, myV3List } from '@/stores'
  import { onMount } from 'svelte'
  import { getMyAssetList, getMyV3List } from '@/api/index'

  onMount(async () => {
    if (window.klaytn !== undefined && window.klaytn._kaikas.isEnabled()) {
      await connectWallet()
    }
    if (window.klaytn !== undefined) {
      window.klaytn.on('accountsChanged', async () => {
        await connectWallet()
      })
    }
  })

  const connectWallet = async () => {
    connect()
    await klaytn.enable()
    $myAddress = klaytn.selectedAddress
    $myShortAddress = `${$myAddress.slice(0, 6)}...${$myAddress.slice(-4)}`
    // $myV3List = await getMyV3List(klaytn.selectedAddress)
    // $myAssetList = await getMyAssetList(klaytn.selectedAddress)
    $isConnect = true
  }
</script>

<button class="normal-button" on:click={connectWallet}>Wallet Connect</button>

<style lang="scss">
  @media screen and (max-width: 1000px) {
    .normal-button {
      display: none;
    }
  }
</style>
