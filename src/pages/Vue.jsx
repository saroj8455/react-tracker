import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
export default function Vue() {
  const { vueId } = useParams();
  const [isUser, setIsUser] = useState(false);

  const data = useLoaderData();
  console.log(data);

  return (
    <div className='min-h-screen flex flex-column justify-content-center align-items-center'>
      <h1 className='text-3xl text-orange-500'>
        Vue Tech : <span className='text-blue-500'>{vueId}</span>
      </h1>
      <h1 className='text-3xl text-orange-500'>
        {data.status ? (
          <span className='text-blue-500'>{data.name}</span>
        ) : (
          <span className='text-blue-500'>Something went wrong</span>
        )}
      </h1>
    </div>
  );
}
