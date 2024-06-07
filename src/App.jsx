import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

import { useState } from 'react';

function App() {
  const [value, setValue] = useState('');
  return (
    <>
      <main>
        <div className='text-center text-teal-600'>
          <h1>Hello world App</h1>
          <h1>Vite + React</h1>
        </div>
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
