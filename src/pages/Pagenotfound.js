import React, { useEffect } from 'react';
import pageNotFound from "../assets/404pagenotfound.svg";
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';

export const Pagenotfound = () => {
  
  useEffect(() => {
document.title = `Page not found / newsmate`;

  }, []);
  
  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
        <p className="text-7xl text-gray-700 font-bold my-10 dark:text-white">404, Oops!</p>
        <div className="max-w-lg">
        <img className="rounded" src={pageNotFound} alt="img" width={320}/>
        </div>

        </div>
        <div className="flex justify-center my-4">
        <Link to="/">
          <Button>Back To Home</Button>
          </Link>
        </div>
      </section>

    </main>
  )
}
