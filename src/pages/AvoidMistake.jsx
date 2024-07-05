import { Card } from 'primereact/card';
import React from 'react';

export const AvoidMistake = ({ data }) => {
  console.log(data);

  return (
    <div>
      <Card title='Conditional Rendering Mistake' subTitle='reactjs'>
        {/* cast the number/NaN type to boolen */}
        {!!Object.keys(data).length ? (
          <h3 className='text-primary'>{data.tech}</h3>
        ) : (
          <h3>Not Found</h3>
        )}
        <p className='m-0'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere odit
          sit nihil ipsa enim. Veritatis maiores, magnam ad ea placeat, saepe
          officia quaerat optio ratione nostrum facere provident ex esse.
        </p>
      </Card>
    </div>
  );
};
