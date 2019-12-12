import axios from 'axios';

// function getSeller() {
//   return axios.get('/api/seller').then(response => {})
// }
const getSeller = axios.get('/api/seller')
const getGoods = axios.get('/api/goods')
const getRatings = axios.get('/api/ratings')


export {getSeller,getGoods,getRatings}
