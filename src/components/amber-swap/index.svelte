<script lang="ts">
  import { ethers } from 'ethers'
  import { divide, multiply, bignumber } from 'mathjs'
  import { approveNectar } from '@/blockchain/contracts/Nectar'
  import { approveMix } from '@/blockchain/contracts/Mix'
  import { amberCA } from '@/blockchain/chain/address'
  import { totalSupply, addKctLiquidity, removeLiquidity } from '@/blockchain/contracts/exchange'
  import { getPoolData } from '@/blockchain/contracts/utils'
  import { balanceOfKlay } from '@/blockchain/chain/klaytn'
  import { balanceOfAmber } from '@/blockchain/contracts/Amber'
  import { balanceOfNectar } from '@/blockchain/contracts/Nectar'
  import { balanceOfMix } from '@/blockchain/contracts/Mix'
  import { myKlayBalance, myAmberBalance, myNectarBalance, myMixBalance } from '@/stores/index'

  let inputA: any = ''
  let inputB: any = ''
  let inputLP: any = ''
  let selectedType = 0
  let switchType = true

  function switchChange() {
    switchType = !switchType
    inputDataInit()
  }

  function typeChange(num: any) {
    selectedType = num
    switchType = true
    inputDataInit()
  }

  function inputDataInit() {
    inputA = ''
    inputB = ''
    inputLP = ''
  }

  async function balanceDataInit() {
    $myKlayBalance = ethers.utils.formatEther(await balanceOfKlay())
    $myAmberBalance = ethers.utils.formatEther(await balanceOfAmber())
    $myNectarBalance = ethers.utils.formatEther(await balanceOfNectar())
    $myMixBalance = ethers.utils.formatEther(await balanceOfMix())
  }

  async function tokenSwapToAmber() {
    const parsedTokenAAmount: any = ethers.utils.parseEther(inputA)
    const parsedTokenBAmount: any = ethers.utils.parseEther(inputB)
    await approveNectar(amberCA, parsedTokenAAmount)
    await approveMix(amberCA, parsedTokenBAmount)
    await addKctLiquidity(parsedTokenAAmount, parsedTokenBAmount)
    inputDataInit()
    await balanceDataInit()
  }

  async function amberSwapToToken() {
    const parsedAmberAmount: any = ethers.utils.parseEther(inputLP.toString())
    await removeLiquidity(parsedAmberAmount)
    inputDataInit()
    await balanceDataInit()
  }

  function min(...values: any) {
    if (values.length < 1) {
      return Infinity
    }
    let minValue = values.shift()
    for (const value of values) {
      if (value < minValue) {
        minValue = value
      }
    }
    return minValue
  }

  function calcTokenAmount(wantTokenReserve: any, inputTokenReserve: any, inputTokenAmount: any) {
    return multiply(divide(wantTokenReserve, inputTokenReserve), inputTokenAmount)
  }

  function calcTokenAmountByLP(wantTokenReserve: any, inputLPAmount: any, totalSupplyLP: any) {
    return divide(multiply(wantTokenReserve, inputLPAmount), totalSupplyLP)
  }

  function calcLPAmount(
    reserveA: any,
    reserveB: any,
    amountA: any,
    amountB: any,
    totalSupplyLP: any
  ) {
    const valueA = divide(multiply(amountA, totalSupplyLP), reserveA)
    const valueB = divide(multiply(amountB, totalSupplyLP), reserveB)
    const lpTokenAmount = min(valueA, valueB)
    return lpTokenAmount
  }

  async function estimateTokenA() {
    if (inputB === null || inputB === 0) {
      inputB = 0
    }
    const poolData = await getPoolData(amberCA)
    const reserveA = bignumber(poolData.reserveA.toString())
    const reserveB = bignumber(poolData.reserveB.toString())
    const amountB = bignumber(inputB.toString())
    const estimatedA = calcTokenAmount(reserveA, reserveB, amountB)
    inputB = inputB.toString()
    if (estimatedA.toString() === '0') {
      inputA = Number(estimatedA.toString())
    } else {
      inputA = Number(estimatedA.toString()).toFixed(18)
    }
    await estimateTokenLP()
  }

  async function estimateTokenB() {
    if (inputA === null || inputA === 0) {
      inputA = 0
    }
    const poolData = await getPoolData(amberCA)
    const reserveA = bignumber(poolData.reserveA.toString())
    const reserveB = bignumber(poolData.reserveB.toString())
    const amountA = bignumber(inputA.toString())
    const estimatedB = calcTokenAmount(reserveB, reserveA, amountA)
    inputA = inputA.toString()
    if (estimatedB.toString() === '0') {
      inputB = Number(estimatedB.toString())
    } else {
      inputB = Number(estimatedB.toString()).toFixed(18)
    }
    await estimateTokenLP()
  }

  async function estimateTokenLP() {
    const poolData = await getPoolData(amberCA)
    const totalLPTokenSupply = await totalSupply()
    const totalLP = bignumber(totalLPTokenSupply.toString())
    const reserveA = bignumber(poolData.reserveA.toString())
    const reserveB = bignumber(poolData.reserveB.toString())
    const amountA = bignumber(inputA.toString())
    const amountB = bignumber(inputB.toString())

    const lpTokenAmount = calcLPAmount(reserveA, reserveB, amountA, amountB, totalLP)
    if (lpTokenAmount.toString() === '0') {
      inputLP = Number(lpTokenAmount.toString())
    } else {
      inputLP = Number(lpTokenAmount.toString()).toFixed(18)
    }
  }

  async function estimateTokens() {
    const poolData = await getPoolData(amberCA)
    const totalLPTokenSupply = await totalSupply()
    const totalLP = bignumber(totalLPTokenSupply.toString())
    const reserveA = bignumber(poolData.reserveA.toString())
    const reserveB = bignumber(poolData.reserveB.toString())
    const amountLP = bignumber(inputLP)

    const estimatedA = calcTokenAmountByLP(reserveA, amountLP, totalLP)
    const estimatedB = calcTokenAmountByLP(reserveB, amountLP, totalLP)
    if (amountLP.toString() === '0') {
      inputA = Number(estimatedA.toString())
      inputB = Number(estimatedB.toString())
    } else {
      inputA = Number(estimatedA.toString()).toFixed(18)
      inputB = Number(estimatedB.toString()).toFixed(18)
    }
  }
</script>

<div class="box">
  <div class="box-title">amber swap</div>
  <div class="box-content">
    <div class="button-wrap">
      {#if selectedType === 0}
        <button class="normal-button-actived">Nectar-MiX &lt-&gt Amber</button>
        <button class="normal-button" on:click={() => alert('준비중입니다.')}
          >Klay &lt-&gt Amber</button
        >
      {:else}
        <!-- else content here -->
        <button class="normal-button" on:click={() => typeChange(0)}
          >Nectar-MiX &lt-&gt Amber</button
        >
        <button class="normal-button-actived">Klay &lt-&gt Amber</button>
      {/if}
    </div>
    <div class="button-wrap">
      <button class="normal-button" style="width: 100%; font-size: 16px;" on:click={switchChange}
        >Switch</button
      >
    </div>
    {#if switchType === true}
      <div class="box-sub-wrap">
        <div class="form-wrap">
          <div class="token-name">Nectar</div>
          <input type="number" placeholder="Amount" bind:value={inputA} on:keyup={estimateTokenB} />
        </div>
        <div class="form-wrap">
          <div class="token-name">Mix</div>
          <input type="number" placeholder="Amount" bind:value={inputB} on:keyup={estimateTokenA} />
        </div>
        <div class="line" />
        <div class="form-wrap">
          <div class="token-name">Estimated Amber</div>
          <input
            type="number"
            placeholder="Amount"
            bind:value={inputLP}
            on:keyup={estimateTokens}
          />
        </div>
        <div class="line" />
        <div class="small-text">* 총 세번의 트랜잭션이 있습니다.</div>
      </div>
      <div class="button-wrap">
        <button
          class="normal-button"
          style="width: 100%; font-size: 22px;"
          on:click={tokenSwapToAmber}>Swap</button
        >
      </div>
    {:else}
      <div class="box-sub-wrap">
        <div class="form-wrap">
          <div class="token-name">Amber</div>
          <input
            type="number"
            placeholder="Amount"
            bind:value={inputLP}
            on:keyup={estimateTokens}
          />
        </div>
        <div class="line" />
        <div class="form-wrap">
          <div class="token-name">Estimated Nectar</div>
          <input type="number" placeholder="Amount" bind:value={inputA} readonly />
        </div>
        <div class="form-wrap">
          <div class="token-name">Estimated Mix</div>
          <input type="number" placeholder="Amount" bind:value={inputB} readonly />
        </div>
        <div class="line" />
        <div class="small-text">* 총 한번의 트랜잭션이 있습니다.</div>
      </div>
      <div class="button-wrap">
        <button
          class="normal-button"
          style="width: 100%; font-size: 22px;"
          on:click={amberSwapToToken}>Swap</button
        >
      </div>
    {/if}
  </div>
</div>

<style lang="scss">
  .small-text {
    font-size: 14px;
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
    .normal-button-actived {
      font-size: 14px;
      width: 50%;
    }
  }
  .box-sub-wrap {
    display: flex;
    flex-direction: column;
    padding: 20px;
  }
  .form-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    .token-name {
      font-size: 18px;
      width: 20%;
    }
    input {
      width: 80%;
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
