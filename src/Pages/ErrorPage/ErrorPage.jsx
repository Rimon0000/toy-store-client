import React from 'react';
import { Link, useRouteError } from 'react-router-dom'
import errorImage from "../../assets/error/6342464.jpg"


const ErrorPage = () => {
  const { error, status } = useRouteError()
  return (
    <div>
      <section>
      <div className='flex flex-col items-center justify-center mx-auto'>
        <div className='max-w-md text-center'>
          <div className='mb-8 font-bold text-5xl'>
          <img src={errorImage} alt="" />
            <span className='sr-only'>Error</span> {status || 404}
          </div>
          <p className=' font-semibold md:text-2xl mb-5 pb-5'>
            {error?.message}
          </p>
          <Link
            to='/'
            className='px-8 py-3 font-semibold rounded bg-cyan-200 text-gray-700 text-decoration-none'>
            Back to Homepage
          </Link>
        </div>
      </div>
    </section>
    </div>
  );
};

export default ErrorPage;