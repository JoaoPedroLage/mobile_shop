import axios from 'axios';

const baseURL = 'https://fakestoreapi.com/products/category/';

async function getByCategory(category: string){
  try {
    const response = await axios.get(baseURL + category);
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
  }
}

export default getByCategory;
