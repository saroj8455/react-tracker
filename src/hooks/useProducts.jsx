// custom hooks for fetch products
import { useQuery } from '@tanstack/react-query';

const FAKE_PRODUCTS_API = 'https://fakestoreapi.com/products';

// define function for fetching products function
const loadProducts = async () => {
  const response = await fetch(FAKE_PRODUCTS_API);
  const data = response.json();
  return data;
};

// custom hooks for products
export const useProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: loadProducts,
  });
};
