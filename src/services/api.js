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

export const BASE_URL = `https://pixabay.com/api/?${searchParams}`;

export async function getPhoto(search, page) {
    try
    {
        const response = await axios.get(`${BASE_URL}&page=${page}&q=${search}`);
        return response.data;
    } catch (error) {
        throw new Error (error);
    }
}

// axios.default.baseURL = `https://pixabay.com/api/?${searchParams}`;

//     export const getPhoto = async(values) => {
//      const response = await axios.post(`${BASE_URL}&page=${page}&q=${search}`);
//         return response.data;
// }

