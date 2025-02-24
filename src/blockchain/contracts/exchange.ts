import { caver, klaytn } from '../chain/klaytn'
import { klayswapExchangeCA } from '../chain/address'
import exchangeABI from '../abi/Exchange.json'

async function totalSupply() {
  const contract = new caver.klay.Contract(exchangeABI, klayswapExchangeCA)
  const data = await contract.methods.totalSupply().call()
  return data
}

async function getCurrentPool() {
  const contract = new caver.klay.Contract(exchangeABI, klayswapExchangeCA)
  const data = await contract.methods.getCurrentPool().call()
  return data
}

async function estimatePos(token: string, amount: string) {
  const contract = new caver.klay.Contract(exchangeABI, klayswapExchangeCA)
  const data = await contract.methods.estimatePos(token, amount).call()
  return data
}

async function estimateNeg(token: string, amount: string) {
  const contract = new caver.klay.Contract(exchangeABI, klayswapExchangeCA)
  const data = await contract.methods.estimateNeg(token, amount).call()
  return data
}

async function addKctLiquidity(amountA: string, amountB: string) {
  const contract = new caver.klay.Contract(exchangeABI, klayswapExchangeCA)
  const data = await contract.methods.addKctLiquidity(amountA, amountB).send({
    from: klaytn.selectedAddress,
    gas: '2500000'
  })
  return data
}

async function removeLiquidity(amount: string) {
  const contract = new caver.klay.Contract(exchangeABI, klayswapExchangeCA)
  const data = await contract.methods.removeLiquidity(amount).send({
    from: klaytn.selectedAddress,
    gas: '2500000'
  })
  return data
}

export {
  totalSupply, getCurrentPool, estimatePos, estimateNeg, addKctLiquidity, removeLiquidity
}