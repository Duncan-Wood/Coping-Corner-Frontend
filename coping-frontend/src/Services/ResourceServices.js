import Client from './api'

export const GetResources = async () => {
  try {
    const res = await Client.get('/resource')
    return res.data
  } catch (error) {
    throw error
  }
}


export const CreateResource = async (data) => {
  try {
    const res = await Client.post('/resource', data)
    return res.data
  } catch (error) {
    throw error
  }
}