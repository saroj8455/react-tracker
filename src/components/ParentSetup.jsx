import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
export default function ParentSetup() {
  const [message, setMessage] = useState('inital message');

  const handelMessage = (params) => {
    setMessage(params);
  };

  return (
    <div className='flex flex-wrap md:justify-content-between justify-content-center'>
      <div
        className='surface-500 font-bold border-round m-2 flex flex-column align-items-center justify-content-center text-white'
        style={{ minWidth: 200, minHeight: 100 }}
      >
        <h3 className='px-1'>Parent Component</h3>
        <h3 className='px-1'>{message}</h3>
      </div>
      <ChildSetup updateMessage={handelMessage} />
      <div
        className='bg-primary font-bold border-round m-2 flex align-items-center justify-content-center'
        style={{ minWidth: 200, minHeight: 100 }}
      >
        bg-primary
      </div>
    </div>
  );
}

export const ChildSetup = ({ updateMessage }) => {
  const [value, setValue] = useState('');
  const handelChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <div
        className='bg-orange-400 font-bold border-round m-2 flex align-items-center justify-content-center p-4'
        style={{ minWidth: 200, minHeight: 100 }}
      >
        <div className='card flex gap-2 flex-column justify-content-center'>
          <h3>Clild Component</h3>
          <InputText value={value} onChange={handelChange} />

          <Button label='Change Title' onClick={() => updateMessage(value)} />
        </div>
      </div>
    </div>
  );
};
