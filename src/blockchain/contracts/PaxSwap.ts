import { caver, klaytn } from '../chain/klaytn'
import { paxSwapCA } from '../chain/address'
import PaxSwapABI from '../abi/PaxSwap.json'

async function getInitAmount() {
  const contract = new caver.klay.Contract(PaxSwapABI, paxSwapCA)
  const amount = await contract.methods.getInitAmount().call()
  return amount
}

async function getSwapAmount() {
  const contract = new caver.klay.Contract(PaxSwapABI, paxSwapCA)
  const amount = await contract.methods.getSwapAmount().call()
  return amount
}

async function swap(amount: any) {
  const contract = new caver.klay.Contract(PaxSwapABI, paxSwapCA)
  const tx = await contract.methods.swap(amount).send({ from: klaytn.selectedAddress, gas: '210000' })
  return tx
}

export { getInitAmount, getSwapAmount, swap }