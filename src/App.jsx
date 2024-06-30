import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

import React, { Suspense, useEffect, useRef, useState } from 'react';
import Profile from './components/Profile';
import TopBanner from './components/TopBanner';
import ProjectWork from './components/ProjectWork';
import Project from './components/Project';
import VXRail from './components/VXRail';
import Transport from './components/Transport';
import IonoxCart from './components/IonoxCart';
import Flexdemo from './components/Flexdemo';
import Library from './components/Library';
import SinglePrinciple from './components/SinglePrinciple';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import CallbackSetup from './components/CallbackSetup';
import ParentSetup from './components/ParentSetup';
import MemoSetup from './components/MemoSetup';
import { ProgressSpinner } from 'primereact/progressspinner';
// import LazyCard from './components/LazyCard';
import ErrorBoundary from './components/ErrorBoundry';

import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './redux/counter';
import { Card } from 'primereact/card';

const queryClient = new QueryClient();

const LazyCard = React.lazy(() => import('./components/LazyCard'));

// create a custom error component
const CustomErrorComponent = () => {
  // This component will throw an error to demonstrate the error boundary
  throw new Error('An error occurred in SomeComponent!');
};

function App() {
  const [value, setValue] = useState('');
  const [username, setUsername] = useState('');
  const usernameField = useRef();
  const projectInfo = {
    title: 'Hello world app',
    description: 'lorem ipsom',
    tech: ['Angular', 'Reactjs', 'Nodejs'],
  };

  // redux counter setup
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  // hooks / life cycle method
  useEffect(() => {
    console.log('received from counter store', count);
    // usernameField.current.focus();
    // clean up function
    return () => {
      usernameField.current.value = '';
    };
  }, [count]);

  return (
    <QueryClientProvider client={queryClient}>
      <main>
        <section className='py-5' id='lazy__card'>
          <div className='container'>
            {/* lazy component */}
            <ErrorBoundary>
              <Suspense fallback={<ProgressSpinner />}>
                <LazyCard />
                {/* <CustomErrorComponent /> */}
              </Suspense>
            </ErrorBoundary>
          </div>
        </section>
        {/* redux  */}
        <h2 className='text-center'>Redux Counter</h2>
        <div className='container'>
          <div className='flex gap-4  align-items-center'>
            <div>
              <Button label='Increment' onClick={() => dispatch(increment())} />
            </div>
            <Card title={count}>
              <p className='mb-4'>
                React Redux is the official React UI bindings layer for Redux.
                It lets your React components read data from a Redux store, and
                dispatch actions to the store to update state.
              </p>
              <div className='m-0'>
                The Redux Toolkit package is intended to be the standard way to
                write Redux logic. It was originally created to help address
                three common concerns about Redux:
                <ul>
                  <li>"Configuring a Redux store is too complicated"</li>
                  <li>
                    "I have to add a lot of packages to get Redux to do anything
                    useful" "Redux requires too much boilerplate code"
                  </li>
                </ul>
              </div>
            </Card>
            <div>
              <Button label='Decrement' onClick={() => dispatch(decrement())} />
            </div>
          </div>
        </div>

        {/* redux  */}
        <section className='py-5'>
          <div className='container'>
            <MemoSetup />
          </div>
        </section>
        <section className='py-5'>
          <div className='container'>
            <ParentSetup />
          </div>
        </section>
        <section className='py-5'>
          <div className='container'>
            {/* <Library /> */}
            <CallbackSetup />
          </div>
        </section>
        <section>
          <div className='container'>
            <h1 className='text-center pb-2'>ref example and useRef hooks</h1>
            <div className='card py-3 flex justify-content-center'>
              <div className='flex flex-column gap-2'>
                <label htmlFor='username'>Username</label>
                <InputText
                  id='username'
                  ref={usernameField}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  aria-describedby='username-help'
                />
                <small id='username-help'>
                  Enter your username to reset your password. {username}
                </small>
              </div>
            </div>
          </div>
        </section>
        <section>
          <TopBanner />
        </section>
        <section id='profile'>
          {/* <Project project={projectInfo} /> */}
          {/* <ProjectWork /> */}

          <SinglePrinciple />
          <Flexdemo />
          <Profile />
          <Transport />
          <IonoxCart />
          <VXRail />
        </section>
      </main>
      <footer>
        <div className='surface-section px-4 py-6 md:px-6 lg:px-8 text-center'>
          <img
            src='https://blocks.primereact.org/demo/images/blocks/logos/bastion-purple.svg'
            alt='Image'
            height={50}
            className='inline-block'
          />
          <div className='font-medium text-900 mt-4 mb-3'>
            © 2023 Bastion, Inc
          </div>
          <p className='text-600 line-height-3 mt-0 mb-4'>
            Cursus metus aliquam eleifend mi. Malesuada pellentesque elit eget
            gravida. Nunc eget lorem dolor sed viverra ipsum nunc aliquet
            bibendum. Massa tincidunt dui ut ornare lectus sit amet est
            placerat.
          </p>
          <div className='flex align-items-center justify-content-center'>
            <a className='cursor-pointer text-700 mr-5'>
              <i className='pi pi-twitter' />
            </a>
            <a className='cursor-pointer text-700 mr-5'>
              <i className='pi pi-facebook' />
            </a>
            <a className='cursor-pointer text-700'>
              <i className='pi pi-github' />
            </a>
          </div>
        </div>
      </footer>
    </QueryClientProvider>
  );
}

export default App;
