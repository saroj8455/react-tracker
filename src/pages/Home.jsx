import { ProgressSpinner } from 'primereact/progressspinner';
import React, { Suspense } from 'react';

export default function Home() {
  return (
    <div className='min-h-screen flex flex-column justify-content-center align-items-center'>
      {/* <ProgressSpinner /> */}
      <h1 className='text-3xl text-orange-500'>
        Welcome to React Tracker Home Page
      </h1>
    </div>
  );
}
