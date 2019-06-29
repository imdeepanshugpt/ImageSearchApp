import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 15b54372b0f868f1ef86e532fc8b30c92ce22064b916a398850fff61f95aff48'
    }
});