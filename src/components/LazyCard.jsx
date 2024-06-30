import React, { useEffect } from 'react';
import { Card } from 'primereact/card';
import { useSelector, useDispatch } from 'react-redux';
export default function LazyCard() {
  // data retrive from central counter store
  const count = useSelector((state) => state.counter.value);

  useEffect(() => {
    console.log('reveiced in lazy comp', count);
  }, [count]);

  return (
    <div className='card'>
      <Card title='Lazy Card' subTitle={`redux store ${count}`}>
        <p className='m-0'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
          sed consequuntur error repudiandae numquam deserunt quisquam repellat
          libero asperiores earum nam nobis, culpa ratione quam perferendis
          esse, cupiditate neque quas!
        </p>
      </Card>
    </div>
  );
}
