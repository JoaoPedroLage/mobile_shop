import axios from 'axios';

const baseURL = 'https://fakestoreapi.com/products';

async function getAll(){
  try {
    const response = await axios.get(baseURL);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}

export default getAll;
