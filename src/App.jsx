import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

import { useEffect, useRef, useState } from 'react';
import Profile from './components/Profile';
import TopBanner from './components/TopBanner';
import ProjectWork from './components/ProjectWork';
import Project from './components/Project';
import VXRail from './components/VXRail';
import Transport from './components/Transport';
import IonoxCart from './components/IonoxCart';

function App() {
  const [value, setValue] = useState('');
  const [username, setUsername] = useState('');
  const usernameField = useRef();
  const projectInfo = {
    title: 'Hello world app',
    description: 'lorem ipsom',
    tech: ['Angular', 'Reactjs', 'Nodejs'],
  };

  // hooks / life cycle method
  useEffect(() => {
    usernameField.current.focus();
    // clean up function
    return () => {
      usernameField.current.value = '';
    };
  }, []);

  return (
    <>
      <main>
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
    </>
  );
}

export default App;
