import { caver } from '../chain/klaytn'
import { klayswapUtilsCA } from '../chain/address'
import utilsABI from '../abi/Utils.json'

async function getPoolData(lp: string) {
  const contract = new caver.klay.Contract(utilsABI, klayswapUtilsCA)
  const data = await contract.methods.getPoolData(lp).call()
  return data
}

async function estimateSwap(tokenIn: string, tokenOut: string, amountIn: string) {
  const path: Array<string> = []
  const contract = new caver.klay.Contract(utilsABI, klayswapUtilsCA)
  const data = await contract.methods.estimateSwap(tokenIn, tokenOut, amountIn, path).call()
  return data
}

export {
  getPoolData, estimateSwap
}