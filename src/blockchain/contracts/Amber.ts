import { caver, klaytn } from '../chain/klaytn'
import { amberCA } from '../chain/address'
import ERC20ABI from '../abi/ERC20.json'

async function balanceOfAmber() {
  const contract = new caver.klay.Contract(ERC20ABI, amberCA)
  const balance = await contract.methods.balanceOf(klaytn.selectedAddress).call()
  return balance
}

async function approveOfAmber(spender: string, amount: any) {
  const contract = new caver.klay.Contract(ERC20ABI, amberCA)
  const tx = contract.methods.approve(spender, amount).send({ from: klaytn.selectedAddress, gas: '210000' })
  return tx
}

export { balanceOfAmber, approveOfAmber }