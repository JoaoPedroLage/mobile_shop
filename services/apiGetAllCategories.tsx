import axios from 'axios';

const baseURL = 'https://fakestoreapi.com/products/categories';

async function getAll(){
  try {
    const response = await axios.get(baseURL);
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
  }
}

export default getAll;
