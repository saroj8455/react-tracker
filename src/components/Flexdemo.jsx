import React, { useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { Get } from 'react-axios';
const ShowCase = () => {
  return (
    <>
      <h1>Axios Showcase Component</h1>
      <Get url='https://fakestoreapi.com/products'>
        {(error, response, isLoading, makeRequest) => {
          // console.log(response);
          if (error) {
            return (
              <div>
                Something bad happened: {error.message}{' '}
                <button
                  onClick={() => makeRequest({ params: { reload: true } })}
                >
                  Retry
                </button>
              </div>
            );
          } else if (isLoading) {
            return <div>Loading...</div>;
          } else if (response !== null) {
            return (
              <div>
                <button
                  onClick={() => makeRequest({ params: { refresh: true } })}
                >
                  Refresh
                </button>
              </div>
            );
          }
          return <div>Default message before request is made.</div>;
        }}
      </Get>
    </>
  );
};

export default function Flexdemo() {
  const [selectedCity, setSelectedCity] = useState(null);
  const cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' },
  ];

  return (
    <>
      <section>
        <div className='container'>
          <ShowCase />
          {/* <div className='header__group'> */}
          <div className='flex gap-2'>
            <h1 className='text-4xl text-white flex-1 border-round surface-500 text-center'>
              H-Shop
            </h1>
            <Dropdown
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.value)}
              options={cities}
              optionLabel='name'
              placeholder='Search by category'
              className='w-full md:w-14rem'
            />
            <Dropdown
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.value)}
              options={cities}
              optionLabel='name'
              placeholder='Search by rating'
              className='w-full md:w-14rem'
            />
          </div>
        </div>
      </section>
      <section className=' products'>
        <div className='product-card'>
          <div className='product-image'>
            <img src='https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg' />
          </div>
          <div className='product-info'>
            <h5>Winter Jacket</h5>
            <h6>$99.99</h6>
          </div>
        </div>
      </section>
    </>
  );
}
