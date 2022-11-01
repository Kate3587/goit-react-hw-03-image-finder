import axios from 'axios';


// export const getPhotoService = async() => {
//     const data = await axios.get('https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12');
//     return data
// }

export const itemPerPage = 12;
export const currentPage = 1;

const API_KEY = '30976438-b9570cf67e96eec486343edd5';
const searchParams = new URLSearchParams({
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    per_page: itemPerPage,
    page: currentPage,
    
});

const postApi = axios.create({
    baseURL: `https://pixabay.com/api/?${searchParams}`
})

export const getPhoto = async param => {
    const { data } = await postApi.get(`&q=${param}`);

    return data;
};

// https://pixabay.com/api/?q=cat&pa`ge=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12

