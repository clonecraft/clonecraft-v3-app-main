import { caver, klaytn } from '../chain/klaytn'
import { kpaxCA } from '../chain/address'
import ERC20ABI from '../abi/ERC20.json'

async function balanceOfPax() {
  const contract = new caver.klay.Contract(ERC20ABI, kpaxCA)
  const balance = await contract.methods.balanceOf(klaytn.selectedAddress).call()
  return balance
}

async function approvePax(spender: any, amount: any) {
  const contract = new caver.klay.Contract(ERC20ABI, kpaxCA)
  const tx = contract.methods.approve(spender, amount).send({ from: klaytn.selectedAddress, gas: '210000' })
  return tx
}

export { balanceOfPax, approvePax }