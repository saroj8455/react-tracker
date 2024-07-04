import React, { useMemo } from 'react';
import { Button } from 'primereact/button';
const MainChild = ({ counter, handelCounter }) => {
  console.log('child component render');

  const childNumber = useMemo(() => {
    let output = 0;
    for (let index = 0; index < 500_000_000; index++) {
      output++;
    }
    return output;
  }, []);

  return (
    <div className='border-3 border-primary-500  p-2 m-2 surface-overlay font-bold flex flex-column align-items-center justify-content-center'>
      <h1>main child</h1>
      <h3>Child Counter Variable : {counter}</h3>
      <h4>Complex Calc: {childNumber}</h4>
      <Button label='Child Counter' onClick={handelCounter} severity='help' />
    </div>
  );
};

export default React.memo(MainChild);
