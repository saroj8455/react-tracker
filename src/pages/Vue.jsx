import React from 'react';
import { useParams } from 'react-router-dom';
export default function Vue() {
  const { vueId } = useParams();
  return (
    <div className='min-h-screen flex flex-column justify-content-center align-items-center'>
      <h1 className='text-3xl text-orange-500'>
        Vue Tech : <span className='text-blue-500'>{vueId}</span>
      </h1>
    </div>
  );
}
