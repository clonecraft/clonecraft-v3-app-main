import { caver, klaytn } from '../chain/klaytn'
import { v3SaleCA } from '../chain/address'
import V3SaleABI from '../abi/V3Sale.json'

async function saleMint(amount: number, value: any) {
  const contract = new caver.klay.Contract(V3SaleABI, v3SaleCA)
  const tx = await contract.methods.saleMint(amount).send({ from: klaytn.selectedAddress, gas: '2100000', value: value })
  return tx
}

async function freeSaleMint() {
  const contract = new caver.klay.Contract(V3SaleABI, v3SaleCA)
  const tx = await contract.methods.freeSaleMint().send({ from: klaytn.selectedAddress, gas: '2100000' })
  return tx
}

async function getSalePrice() {
  const contract = new caver.klay.Contract(V3SaleABI, v3SaleCA)
  const amount = await contract.methods.getSalePrice().call()
  return amount
}

async function getSaleEpoch() {
  const contract = new caver.klay.Contract(V3SaleABI, v3SaleCA)
  const amount = await contract.methods.getSaleEpoch().call()
  return amount
}

async function getFreeSaleCount(epoch: any) {
  const contract = new caver.klay.Contract(V3SaleABI, v3SaleCA)
  const amount = await contract.methods.freeSaleCount(epoch).call()
  return amount
}

async function getSaleCountPerAddress(epoch: any, address: any) {
  const contract = new caver.klay.Contract(V3SaleABI, v3SaleCA)
  const amount = await contract.methods.saleCountPerAddress(epoch, address).call()
  return amount
}

async function getFreeSaleCountPerAddress(epoch: any, address: any) {
  const contract = new caver.klay.Contract(V3SaleABI, v3SaleCA)
  const isMint = await contract.methods.freeSaleCountPerAddress(epoch, address).call()
  return isMint
}

export { saleMint, freeSaleMint, getSalePrice, getSaleEpoch, getFreeSaleCount, getSaleCountPerAddress, getFreeSaleCountPerAddress }