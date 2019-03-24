import axios from 'axios'

export default axios.create({
    baseURL: 'https://newsapi.org/v2',
    headers:{
        Authorization: "Client-ID 973163c29a164868b20716a8d64a5851"
    }


})