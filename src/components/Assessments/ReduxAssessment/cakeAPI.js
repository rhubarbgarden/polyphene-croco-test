import axios from "axios";

// A function to set count value on the server
export function setCount(amount = 1) {
  return axios.post('/count/add', { amount })
}

export function fetchCake() {
  return axios.get('/cake/list')
  .then(res => res.data.cakes)
}
