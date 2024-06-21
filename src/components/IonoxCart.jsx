import React from 'react';
import { Chip } from 'primereact/chip';
export default function IonoxCart() {
  return (
    <div className='surface-section px-2 py-4 md:px-2 lg:px-2'>
      <div className='surface-section'>
        <div className='font-medium text-3xl text-900 mb-3'>#02 Ionox Cart</div>
        <div className='text-2xl text-500 mb-5'>Ionox Software Pvt. Ltd.</div>
        <div className='text-900 font-medium mb-5'>
          This project deals with developing an e-commerce website for online
          product sale. It provides the user with a catalog of different product
          available for purchase in the store. In order to facilitate online
          purchase a shopping cart is provided to the user.
        </div>

        <ul className='list-none p-0 m-0'>
          <li className='flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap'>
            <div className='text-500 w-6 md:w-2 font-medium'>Role</div>
            <div className='text-900 w-full md:w-8 md:flex-order-0 flex-order-1'>
              Full Stack Developer
            </div>
          </li>
          <li className='flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap'>
            <div className='text-500 w-6 md:w-2 font-medium'>
              Key Responsibilities
            </div>
            <div className='text-900 w-full md:w-8 md:flex-order-0 flex-order-1'>
              <ul className='list-none p-0 m-0 '>
                {/* <li className='flex align-items-center py-1 surface-border flex-wrap'>
              template
            </li> */}
                <li className='flex align-items-center py-1 surface-border flex-wrap'>
                  Designed and implemented a responsive user interface using
                  Angular, PrimeNG,Prime Flex and Bootstrap,.
                </li>
                <li className='flex align-items-center py-1 surface-border flex-wrap'>
                  My Role Implement the web application using MEAN Stack
                  technologies (MongoDB, Express.js, React JS, Node.js ) along
                  with HTML, CSS, JavaScript, Bootstrap and other web
                  technologies.
                </li>
                <li className='flex align-items-center py-1 surface-border flex-wrap'>
                  Integrated MongoDB for efficient data storage and retrieval.
                </li>
                <li className='flex align-items-center py-1 surface-border flex-wrap'>
                  Developed responsive web application pages using React JS
                  components for front end UI and consuming the Restful web
                  service API and made use of CRUD Services for effective use of
                  Web services.
                </li>
                <li className='flex align-items-center py-1 surface-border flex-wrap'>
                  Developed RESTful APIs with Node.js and Express to manage
                  product listings, user authentication, and order processing.
                </li>
              </ul>
            </div>
          </li>
          <li className='flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap'>
            <div className='text-500 w-6 md:w-2 font-medium'>Duration</div>
            <div className='text-900 w-full md:w-8 md:flex-order-0 flex-order-1'>
              12 Months
            </div>
          </li>
          <li className='flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap'>
            <div className='text-500 w-6 md:w-2 font-medium'>
              Technology Stack
            </div>
            <div className='text-900 w-full  md:w-8 md:flex-order-0 flex-order-1 card flex flex-wrap gap-2'>
              <Chip key='Java' label='Java' />
              <Chip key='Spring Boot' label='Spring Boot' />
              <Chip key='Angular' label='Angular' />
              <Chip key='RxJS' label='RxJS' />
              <Chip key='Reactjs' label='Reactjs' />
              <Chip key='Nodejs' label='Nodejs' />
              <Chip key='Express' label='Express' />
              <Chip key='Mongo DB' label='Mongo DB' />
              <Chip key='Typescript' label='Typescript' />
              <Chip key='Material UI' label='Material UI' />
              <Chip key='Bootstrap' label='Bootstrap' />
            </div>
          </li>
          <li className='flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap'>
            <div className='text-500 w-6 md:w-2 font-medium'>Tools</div>
            <div className='text-900 w-full  md:w-8 md:flex-order-0 flex-order-1 card flex flex-wrap gap-2'>
              <Chip key='Git' label='Git' />
              <Chip key='Github' label='Github' />
              <Chip key='Google Cloud' label='Google Cloud' />
              <Chip key='Visual Studio Code' label='Visual Studio Code' />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
