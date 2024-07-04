import React, { useCallback, useState } from 'react';
import MainChild from './MainChild';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

export default function MainParent() {
  const [counter, setCounter] = useState(0);
  const [user, setUser] = useState('');

  // check non-primate like functions array object
  const handelCounter = useCallback(() => {
    setCounter(counter + 1);
  }, [counter]);

  return (
    <div className='border-2 border-primary-500   m-2 p-4 surface-overlay font-bold'>
      <h1 className='text-center'>main parent</h1>
      <div className='flex align-items-center  gap-2'>
        <div className='counter_group'>
          <h1>Counter: {counter} </h1>
          <Button
            label='Increase Counter'
            onClick={handelCounter}
            severity='help'
          />
        </div>
        <div className='search__group'>
          <div className='card flex justify-content-center'>
            <InputText value={user} onChange={(e) => setUser(e.target.value)} />
          </div>
        </div>
      </div>

      <MainChild counter={counter} handelCounter={handelCounter} />
    </div>
  );
}
