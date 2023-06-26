import axios from 'axios';

export const productCategory = (categoryCode) => {
    return axios.get(`/product/category/${categoryCode}`);
}