import React, { useState } from 'react';

export default function TopBanner() {
  const [time, setTime] = useState(new Date());

  return (
    <div>
      <h1 className='text-center text-900'>
        Profile last updated - {time.toLocaleDateString()}
      </h1>
    </div>
  );
}
