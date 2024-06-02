import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

import { useState } from 'react';

function App() {
  const [value, setValue] = useState('');
  return (
    <>
      <div className='text-center text-teal-600'>
        <h1>Hello world App</h1>
        <h1>Vite + React</h1>
      </div>
      <div className='card flex justify-content-center'>
        <Button label='Check' icon='pi pi-check' />
      </div>
      <div className='card flex justify-content-center pt-5'>
        <InputText value={value} onChange={(e) => setValue(e.target.value)} />
      </div>
    </>
  );
}

export default App;
