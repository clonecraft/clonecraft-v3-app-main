import { caver } from '../chain/klaytn'
import { priceCalculatorCA } from '../chain/address'
import PriceCalculatorABI from '../abi/PriceCalculator.json'

async function lpTokenAmount(keyToken: string, keyTokenAmount: Number, pathA: Array<string>, pathB: Array<string>) {
  const contract = new caver.klay.Contract(PriceCalculatorABI, priceCalculatorCA)
  const price = await contract.methods.lpTokenAmount(keyToken, keyTokenAmount, pathA, pathB).call()
  return price
}

export { lpTokenAmount }