import { caver, klaytn } from '../chain/klaytn'
import { mixCA } from '../chain/address'
import ERC20ABI from '../abi/ERC20.json'

async function balanceOfMix() {
  const contract = new caver.klay.Contract(ERC20ABI, mixCA)
  const balance = await contract.methods.balanceOf(klaytn.selectedAddress).call()
  return balance
}

async function approveMix(spender: any, amount: any) {
  const contract = new caver.klay.Contract(ERC20ABI, mixCA)
  const tx = contract.methods.approve(spender, amount).send({ from: klaytn.selectedAddress, gas: '210000' })
  return tx
}

export { balanceOfMix, approveMix }