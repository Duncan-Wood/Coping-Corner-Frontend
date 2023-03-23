import Client from './api'

export const GetResources = async () => {
  try {
    const res = await Client.get('/resource')
    return res.data
  } catch (error) {
    throw error
  }
}

export const addResource = async (data) => {
  try {
    const res = await Client.post('resource')
    return res.data
  } catch (error) {
    throw (error)
  }
}
