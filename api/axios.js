import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: '952fa42545f570f9d70423ccbce56cef',
    language: 'ko_KR',
  },
})

export default axiosInstance
