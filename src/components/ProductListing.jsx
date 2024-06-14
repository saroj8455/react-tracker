import React from 'react';
import { Card } from 'primereact/card';
export default function ProductListing({ products }) {
  return (
    <div className='product__wrapper'>
      {products.map((p) => (
        <Card className='mb-2' key={p.id}>
          <h2 className='pb-2 text-indigo-400'>{p.title}</h2>
          <p className='m-0'>
            Price: ${p.price} | Category: {p.category}
          </p>
          <p className='pt-2 text-indigo-200'>{p.description}</p>
        </Card>
      ))}
    </div>
  );
}
