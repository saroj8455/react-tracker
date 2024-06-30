import React, { useEffect, useMemo, useState } from 'react';
import { InputText } from 'primereact/inputtext';

const fib = (n) => {
  // console.log('n', n);

  let result = 0;
  result = n <= 1 ? n : fib(n - 1) + fib(n - 2);
  return result;
};

const fibArray = (n) => {
  console.log('input', n);
  if (n <= 0) return 0;
  let fibArr = [0, 1];
  for (let i = 2; i <= n; i++) {
    fibArr.push(fibArr[i - 1] + fibArr[i - 2]);
  }
  return fibArr;
};

export default function MemoSetup() {
  const [value, setValue] = useState('');
  const [num, setNum] = useState(1);

  // const fibNumber = useMemo(() => fib(num), [num]);

  // un-necessary render
  // const fibNumber = fib(num);
  // const fibNumber = useMemo(() => fib(num), [num]);
  // optimize using useMemo hook
  const fibNumbers = useMemo(() => fibArray(num), [num]);

  // life cycle method
  useEffect(() => {
    console.log('Re-render the app');
  }, [fibNumbers]);

  return (
    <div>
      <div className='card flex flex-column gap-2 justify-content-center'>
        <InputText
          keyfilter='int'
          onChange={(e) => {
            // console.log(e.target.value);
            const inputValue = e.target.value;
            const inputNumber = inputValue ? inputValue : 0;
            setNum(inputNumber);
          }}
          placeholder='Integers'
        />
        <div className='text-2xl '>
          Inital fib numbers : {JSON.stringify(fibNumbers)}
        </div>
        <InputText
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder='Search Amazon.in'
        />
      </div>
    </div>
  );
}
