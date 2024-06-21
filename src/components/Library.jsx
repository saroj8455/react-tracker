import { Button } from 'primereact/button';
import { Divider } from 'primereact/divider';
import React, { useCallback, useEffect, useState } from 'react';
import { InputText } from 'primereact/inputtext';

export default function Library() {
  console.log('library created');
  const [count, setCount] = useState(0);
  const handelChange = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <Book onClick={handelChange} />
      <h1>Library</h1>
      <Button label='Increment' onClick={() => setCount(count + 1)} />
      <p>Count: {count}</p>
    </div>
  );
}

const Book = React.memo(({ onClick }) => {
  console.log('book rendered');

  return (
    <div className='pt-2'>
      <h2 className='text-lg'>Book Component</h2>

      <Button label='Update Counter' onClick={onClick} />
    </div>
  );
});
