import React from 'react';
import { Chip } from 'primereact/chip';
export default function Transport() {
  return (
    <div className='surface-section px-2 py-4 md:px-2 lg:px-2'>
      <div className='surface-section'>
        <div className='font-medium text-3xl text-900 mb-3'>
          #01 Sky Transport Tracking System
        </div>
        <div className='text-2xl text-500 mb-5'>Ionox Software Pvt. Ltd.</div>
        <div className='text-900 font-medium mb-5'>
          Developed a comprehensive Transport/Courier Tracking System aimed at
          improving the efficiency and accuracy of package delivery tracking for
          a logistics Sky Transport. The system allows customers to track their
          shipments in real-time, manage delivery schedules, and receive
          notifications and export tabular data into csv and pdf.
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
                  Angular,Material UI and Bootstrap.
                </li>
                <li className='flex align-items-center py-1 surface-border flex-wrap'>
                  Developed and maintained server-side logic with Node.js and
                  Express, focusing on performance and scalability.
                </li>
                <li className='flex align-items-center py-1 surface-border flex-wrap'>
                  Integrated Map APIs to provide geolocation services, enabling
                  users to view the current location of their courier on a map.
                </li>
                <li className='flex align-items-center py-1 surface-border flex-wrap'>
                  Created RESTful APIs to handle package data, user
                  authentication, and notifications.
                </li>
                <li className='flex align-items-center py-1 surface-border flex-wrap'>
                  Designed and optimized the MongoDB database schema to handle
                  high volumes of tracking data efficiently.
                </li>
              </ul>
            </div>
          </li>
          <li className='flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap'>
            <div className='text-500 w-6 md:w-2 font-medium'>Duration</div>
            <div className='text-900 w-full md:w-8 md:flex-order-0 flex-order-1'>
              8 months
            </div>
          </li>
          <li className='flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap'>
            <div className='text-500 w-6 md:w-2 font-medium'>
              Technology Stack
            </div>
            <div className='text-900 w-full  md:w-8 md:flex-order-0 flex-order-1 card flex flex-wrap gap-2'>
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
