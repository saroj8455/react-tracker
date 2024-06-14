import { Divider } from 'primereact/divider';

import React from 'react';
import { useProducts } from '../hooks/useProducts';
import LoadingDiaplay from './LoadingDiaplay';
import FakeError from './FakeError';
import ProductListing from './ProductListing';

export default function SinglePrinciple() {
  // make api call using query client
  const { data: products, isFetching, error } = useProducts();

  return (
    <>
      <Divider className='py-3' />
      <div className='container'>
        <h1 className='text-center mb-5'>
          Fetch products from fakestore using react query
        </h1>
        {isFetching && <LoadingDiaplay />}
        {error && <FakeError errorContent='Hi Hello' />}
        {/* {products && <ProductListing p={products} />} */}
        {products && <ProductListing products={products} />}
      </div>
      <Divider className='py-5' />
    </>
  );
}
