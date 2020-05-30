const get = (path) => {
  return fetch(`https://5e7d0266a917d70016684219.mockapi.io/api/v1/${path}`, { method: 'GET' })
    .then((response) => response.json())
    .catch((err) => {
      console.log(err)
    })
  ;
}
const post = (path) => {
  return fetch(`https://5e7d0266a917d70016684219.mockapi.io/api/v1/${path}`, { method: 'POST' })
    .then((response) => response.json())
    .catch((err) => {
      console.log(err)
    })
  ;
}
const put = (path) => {
  return fetch(`https://5e7d0266a917d70016684219.mockapi.io/api/v1/${path}`, { method: 'PUT' })
    .then((response) => response.json())
    .catch((err) => {
      console.log(err)
    })
  ;
}
const destroy = (path) => {
  return fetch(`https://5e7d0266a917d70016684219.mockapi.io/api/v1/${path}`, { method: 'DELETE' })
    .then((response) => response.json())
    .catch((err) => {
      console.log(err)
    })
  ;
}

const api = {
  get,
  post,
  put,
  destroy
}


export default api