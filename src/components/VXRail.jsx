import React from 'react';
import { Chip } from '../config/index';
export default function VXRail() {
  return (
    <div className='surface-section px-2 py-4 md:px-2 lg:px-2'>
      <div className='surface-section'>
        <div className='font-medium text-3xl text-900 mb-3'>
          #03 Network Validation Tool for VxRail
        </div>
        <div className='text-2xl text-500 mb-5'>Dell EMC</div>
        <div className='text-900 font-medium mb-5'>
          Developed a comprehensive desktop app for VXRail Rack platform aimed
          at enhancing user experience and boosting the network engineer effort.
        </div>
        <div className='text-900 font-medium mb-5'>
          Dell EMC VxRail Appliance are HCI (hypercoverged Infrastructure
          solution that consolidates compute, storage and network into single,
          highly available, unified system. With careful planning. VxRail
          Appliances can be rapidly deployed into an existing data center
          environment and the end- product is immediately available to deploy
          application and service.
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
                  Angular and Clarity system design.
                </li>
                <li className='flex align-items-center py-1 surface-border flex-wrap'>
                  Working on CI/CD pipelines using Jenkins to streamline the
                  deployment process.
                </li>
                <li className='flex align-items-center py-1 surface-border flex-wrap'>
                  Enhanced user engagement through the implementation of a
                  seamless and intuitive user interface.
                </li>
                <li className='flex align-items-center py-1 surface-border flex-wrap'>
                  Collaborated with the design team to ensure the technical
                  feasibility of UI/UX designs.
                </li>
              </ul>
            </div>
          </li>
          <li className='flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap'>
            <div className='text-500 w-6 md:w-2 font-medium'>Duration</div>
            <div className='text-900 w-full md:w-8 md:flex-order-0 flex-order-1'>
              Oct 2019 to Oct 2020
            </div>
          </li>
          <li className='flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap'>
            <div className='text-500 w-6 md:w-2 font-medium'>
              Technology Stack
            </div>
            <div className='text-900 w-full  md:w-8 md:flex-order-0 flex-order-1 card flex flex-wrap gap-2'>
              <Chip key='Angular' label='Angular' />
              <Chip key='RxJS' label='RxJS' />
              <Chip key='Nodejs' label='Nodejs' />
              <Chip key='Electron' label='Electron' />
              <Chip key='Typescript' label='Typescript' />
              <Chip key='Clarity Design System' label='Clarity Design System' />
            </div>
          </li>
          <li className='flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap'>
            <div className='text-500 w-6 md:w-2 font-medium'>Tools</div>
            <div className='text-900 w-full  md:w-8 md:flex-order-0 flex-order-1 card flex flex-wrap gap-2'>
              <Chip key='Git' label='Git' />
              <Chip key='Jenkins' label='Jenkins' />
              <Chip key='Jira Board' label='Jira Board' />
              <Chip key='Bitbucket' label='Bitbucket' />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
