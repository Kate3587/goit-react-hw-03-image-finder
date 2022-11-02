import axios from 'axios';


export const itemPerPage = 12;

const API_KEY = '30976438-b9570cf67e96eec486343edd5';
const searchParams = new URLSearchParams({
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    per_page: itemPerPage,
    
});

const postApi = axios.create({
    baseURL: `https://pixabay.com/api/?${searchParams}`
})

export const getPhoto = async (param, page) => {
    const { data } = await postApi.get(`&q=${param}&page=${page}`);
    return data;
};


