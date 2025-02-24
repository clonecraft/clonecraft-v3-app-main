let klaytn: any
let caver: any

const connect = () => {
  if (window.klaytn === undefined) {
    alert('Please install Kaikas wallet')
    return false
  }
  klaytn = window.klaytn
  caver = window.caver
}

const balanceOfKlay = async () => {
  const balance = await caver.klay.getBalance(klaytn.selectedAddress)
  return balance
}

export {
  klaytn, caver, connect, balanceOfKlay
}