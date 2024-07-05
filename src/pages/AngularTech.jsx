import React from 'react';
import { AvoidMistake } from './AvoidMistake';
import BlogPost from '../components/BlogPost';
import ErrorBoundary from '../components/ErrorBoundry';

export default function AngularTech() {
  const data = {
    tech: 'Angular 18',
  };
  return (
    <div className='min-h-screen flex flex-column '>
      <h1 className='text-3xl text-orange-500'>Angular Tech</h1>
      <AvoidMistake data={data} />
      <ErrorBoundary>
        <BlogPost />
      </ErrorBoundary>
    </div>
  );
}
