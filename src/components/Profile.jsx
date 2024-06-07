import React from 'react';
import { Tag, Divider } from '../config/index';
export default function Profile() {
  return (
    <div className='px-2 py-2 md:px-2 lg:px-2'>
      <div className='surface-card p-4 shadow-2 border-round'>
        <div className='font-medium text-8xl text-900 mb-3'>SAROJ PADHAN</div>
        <div className='text-4xl text-500 mb-5'>
          Software Engineer at Cognizant Technology Solutions India Pvt. Ltd.
        </div>
        <div className='text-3xl text-700 mb-5 text-justify'>
          6+ years of experience in the development of Web-based solutions &amp;
          Application development as a Full Stack Programmer. Experience in
          Application Development using RestFull Webservice, Java, Javascript,
          Spring Boot, Angular, React Js, Node.js, Html5, CSS3, Bootstrap,
          Tailwindcss.
        </div>
        <Divider className='pb-2' />
        <div className='text-2xl mt-4  text-900 mb-5 flex gap-2 align-items-center justify-content-between'>
          <div className='card flex align-items-center gap-1'>
            <i className='pi pi-mobile'></i> 8093746916
          </div>
          <div className='card flex align-items-center gap-1'>
            <i className='pi pi-inbox mt-1'></i> saroj.padhan11@gmail.com
          </div>
          <div className='card flex align-items-center gap-1'>
            <a href='https://github.com/saroj8455'>
              <i className='pi pi-github text-2xl'></i>
            </a>
          </div>
          <div className='card flex align-items-center gap-1'>
            <a href='https://twitter.com/SarojPa87573820'>
              <i className='pi pi-linkedin text-2xl'></i>
            </a>
          </div>
        </div>
        <ul className='list-none p-0 m-0 border-top-1 surface-border'>
          <li className='flex align-items-center py-3 px-2 flex-wrap surface-ground'>
            <div className='text-900  font-semibold w-full md:w-2 font-medium'>
              Notice Period
            </div>
            <div className='text-900  font-semibold w-full md:w-10'>
              1 Month
            </div>
          </li>
          <li className='flex align-items-center py-3 px-2 flex-wrap'>
            <div className='text-900  font-semibold w-full md:w-2 font-medium'>
              Profile
            </div>
            <div className='text-900 font-semibold w-full md:w-10 line-height-3 text-justify'>
              A highly skilled and versatile Full Stack Developer with over 6
              plus years of experience in designing, developing, and deploying
              web applications. Proficient in a wide range of front-end and
              back-end technologies, including JavaScript, React, Node.js, SQL,
              and No-SQL. Known for a strong attention to detail, exceptional
              problem-solving skills, and a passion for creating robust,
              scalable, and user-friendly applications. Adept at working in both
              team-oriented and self-directed environments, with a proven track
              record of delivering high-quality software solutions on time and
              within budget.
            </div>
          </li>
          <li className='flex align-items-center py-3 px-2 flex-wrap surface-ground'>
            <div className='text-900 font-semibold w-full md:w-2 font-medium'>
              Current CTC(INR)
            </div>
            <div className='text-900 font-semibold w-full md:w-10'>
              11,00,000
            </div>
          </li>
          <li className='flex align-items-center py-3 px-2 flex-wrap'>
            <div className='text-900 px-1 font-semibold w-full md:w-2 font-medium'>
              Key skills and technology
            </div>
            <div className='text-900 w-full md:w-10'>
              <div className='card flex flex-wrap gap-2'>
                <Tag severity='success' value='Java'></Tag>
                <Tag severity='success' value='Spring Boot'></Tag>
                <Tag severity='success' value='Mysql'></Tag>
                <Tag severity='success' value='Mongo DB'></Tag>
                <Tag value='Javascript'></Tag>
                <Tag severity='info' value='Node Js'></Tag>
                <Tag severity='warning' value='React Js'></Tag>
                <Tag severity='danger' value='Angular 2 to 17'></Tag>
                <Tag severity='secondary' value='HTML5'></Tag>
                <Tag severity='contrast' value='CSS3'></Tag>
                <Tag severity='success' value='Bootstrap'></Tag>
                <Tag severity='success' value='Material UI'></Tag>
                <Tag value='Tailwindcss'></Tag>
                <Tag severity='info' value='Prime React'></Tag>
                <Tag severity='danger' value='Prime NG'></Tag>
                <Tag severity='warning' value='Basic AWS'></Tag>
                <Tag severity='secondary' value='Docker Containerization'></Tag>
              </div>
            </div>
          </li>
          {/* experience */}
          <li className='flex align-items-center py-3 px-2 flex-wrap surface-ground'>
            <div className='text-900 font-semibold w-full md:w-2 font-medium'>
              Employment / Experience
            </div>
            <div className='text-900 w-full md:w-10'>
              <div className='grid mt-0 mr-0'>
                <div className='col-12 md:col-6'>
                  <div className='p-3 border-1 surface-border border-round surface-card'>
                    <div className='text-900 mb-2'>
                      <span className='font-medium'>
                        Cognizant Technology Solutions India Pvt. Ltd.
                      </span>
                    </div>
                    <div className='text-700'>
                      Full-time Jan 2022 to Present (2 years 6 months)
                    </div>
                  </div>
                </div>
                <div className='col-12 md:col-6'>
                  <div className='p-3 border-1 surface-border border-round surface-card'>
                    <div className='text-900 mb-2'>
                      <span className='font-medium'>
                        DMI INNOVATIONS PRIVATE LIMITED
                      </span>
                    </div>
                    <div className='text-700'>
                      Full-time Mar 2021 to Jan 2022 (11 months)
                    </div>
                  </div>
                </div>
                <div className='col-12 md:col-6'>
                  <div className='p-3 border-1 surface-border border-round surface-card'>
                    <div className='text-900 mb-2'>
                      <span className='font-medium'>Dell EMC</span>
                    </div>
                    <div className='text-700'>
                      Work as Contractor Oct 2019 to Oct 2020 (1 year 1 month)
                    </div>
                  </div>
                </div>
                <div className='col-12 md:col-6'>
                  <div className='p-3 border-1 surface-border border-round surface-card'>
                    <div className='text-900 mb-2'>
                      <span className='font-medium'>
                        Ionox Software Pvt. Ltd.
                      </span>
                    </div>
                    <div className='text-700'>
                      Full-time Feb 2018 to Sep 2019 (1 year 8 months)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          {/* experience */}
          {/* projects  */}
          <li className='flex align-items-center py-3 px-2 flex-wrap surface-ground'>
            <div className='text-900 font-semibold w-full md:w-2 font-medium'>
              Projects
            </div>
            <div className='text-900 w-full md:w-10'>
              <div className='grid mt-0 mr-0'>
                <div className='col-12 md:col-6'>
                  <div className='p-3 border-1 surface-border border-round surface-card'>
                    <div className='text-900 mb-2'>
                      <i className='pi pi-github mr-2' />
                      <span className='font-medium'>PrimeFaces</span>
                    </div>
                    <div className='text-700'>
                      Ultimate UI Component Suite for JavaServer Faces
                    </div>
                  </div>
                </div>
                <div className='col-12 md:col-6'>
                  <div className='p-3 border-1 surface-border border-round surface-card'>
                    <div className='text-900 mb-2'>
                      <i className='pi pi-github mr-2' />
                      <span className='font-medium'>PrimeNG</span>
                    </div>
                    <div className='text-700'>
                      The Most Complete Angular UI Component Library
                    </div>
                  </div>
                </div>
                <div className='col-12 md:col-6'>
                  <div className='p-3 border-1 surface-border border-round surface-card'>
                    <div className='text-900 mb-2'>
                      <i className='pi pi-github mr-2' />
                      <span className='font-medium'>PrimeReact</span>
                    </div>
                    <div className='text-700'>
                      Advanced UI Components for ReactJS
                    </div>
                  </div>
                </div>
                <div className='col-12 md:col-6'>
                  <div className='p-3 border-1 surface-border border-round surface-card'>
                    <div className='text-900 mb-2'>
                      <i className='pi pi-github mr-2' />
                      <span className='font-medium'>PrimeVue</span>
                    </div>
                    <div className='text-700'>
                      The Most Powerful Vue UI Component Library
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          {/* projects  */}
          {/* repositories */}
          <li className='flex align-items-center py-3 px-2 flex-wrap surface-ground'>
            <div className='text-900 font-semibold w-full md:w-2 font-medium'>
              Repositories
            </div>
            <div className='text-900 w-full md:w-10'>
              <div className='grid mt-0 mr-0'>
                <div className='col-12 md:col-6'>
                  <div className='p-3 border-1 surface-border border-round surface-card'>
                    <div className='text-900 mb-2'>
                      <i className='pi pi-github mr-2' />
                      <span className='font-medium'>PrimeFaces</span>
                    </div>
                    <div className='text-700'>
                      Ultimate UI Component Suite for JavaServer Faces
                    </div>
                  </div>
                </div>
                <div className='col-12 md:col-6'>
                  <div className='p-3 border-1 surface-border border-round surface-card'>
                    <div className='text-900 mb-2'>
                      <i className='pi pi-github mr-2' />
                      <span className='font-medium'>PrimeNG</span>
                    </div>
                    <div className='text-700'>
                      The Most Complete Angular UI Component Library
                    </div>
                  </div>
                </div>
                <div className='col-12 md:col-6'>
                  <div className='p-3 border-1 surface-border border-round surface-card'>
                    <div className='text-900 mb-2'>
                      <i className='pi pi-github mr-2' />
                      <span className='font-medium'>PrimeReact</span>
                    </div>
                    <div className='text-700'>
                      Advanced UI Components for ReactJS
                    </div>
                  </div>
                </div>
                <div className='col-12 md:col-6'>
                  <div className='p-3 border-1 surface-border border-round surface-card'>
                    <div className='text-900 mb-2'>
                      <i className='pi pi-github mr-2' />
                      <span className='font-medium'>PrimeVue</span>
                    </div>
                    <div className='text-700'>
                      The Most Powerful Vue UI Component Library
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          {/* repositories */}
        </ul>
      </div>
    </div>
  );
}
