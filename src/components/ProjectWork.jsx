import React from 'react';
import { Chip } from '../config/index';
export default function ProjectWork() {
  return (
    <div className='surface-section px-2 py-4 md:px-2 lg:px-2'>
      <div className='surface-section'>
        <div className='font-medium text-3xl text-900 mb-3'>
          Network Validation Tool for VxRail
        </div>
        <div className='text-500 mb-5'>
          Dell EMC VxRail Appliance are HCI (hypercoverged Infrastructure
          solution that consolidates compute, storage and network into single,
          highly available, unified system.
        </div>
        <div className='text-500 mb-5'>
          With careful planning. VxRail Appliances can be rapidly deployed into
          an existing data center environment and the end- product is
          immediately available to deploy application and service.
        </div>
        <ul className='list-none p-0 m-0'>
          <li className='flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap'>
            <div className='text-500 w-6 md:w-2 font-medium'>Duration</div>
            <div className='text-900 w-full md:w-8 md:flex-order-0 flex-order-1'>
              Duration: October 2019 – till date
            </div>
          </li>
          <li className='flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap'>
            <div className='text-500 w-6 md:w-2 font-medium'>
              Technology Stack
            </div>

            {/* technology stack */}
            <div className='text-900 w-full  md:w-8 md:flex-order-0 flex-order-1 card flex flex-wrap gap-2'>
              <Chip label='Angular' />
              <Chip label='Electron' />
              <Chip label='Nodejs' />
              <Chip label='Webpack' />
              <Chip label='Clarity' />
            </div>
          </li>
          {/* <li className='flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap'>
            <div className='text-500 w-6 md:w-2 font-medium'>Director</div>
            <div className='text-900 w-full md:w-8 md:flex-order-0 flex-order-1'>
              Michael Mann
            </div>
          </li> */}
        </ul>
      </div>
    </div>
  );
}
