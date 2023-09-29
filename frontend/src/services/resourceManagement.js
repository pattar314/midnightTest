import axios from 'axios'

export const createResource = async (path, data) => {
  const data = await axios.post(`/api/${path}`, data)
  if(data.data && !data.loading === true){
    console.log('data in resource manager: ', data.data)
    return data.data
  }
}


export const readResource = async (path, id) => {
  if(id){
    const readRequest = await axios.get(`/api/${path}`, {id})
    console.log('read request in resource management: ', readRequest.data)
    return readRequest.data
  } else {
    const readRequest = await axios.get(`/api/${path}`)
    console.log('read request in resource management: ', readRequest.data)
    return readRequest.data
  }
}


export const updateResource = async (path, data) => {
  const updateRequest = await axios.put(`api/${path}`, data)
  console.log('update request in resource management: ', updateRequest.data)
  return updateRequest.data
}

export const deleteResource = async (path, id) => {
  const deleteRequest = await axios.delete(`/api/${path}`, id)
  console.log('delete request in resource management: ', deleteRequest.data)
  return deleteRequest.data
}

