import axios from 'axios'
import { METADATA_API_BASE_URI } from '@/constants/index'

const getMyV3List = async (address: string) => {
  const res = await axios.get(`${METADATA_API_BASE_URI}/v3/wallet/${address}`)
  return res.data
}

const getMyAssetList = async (address: string) => {
  const res = await axios.get(`${METADATA_API_BASE_URI}/asset/wallet/${address}`)
  return res.data
}

export { getMyV3List, getMyAssetList }