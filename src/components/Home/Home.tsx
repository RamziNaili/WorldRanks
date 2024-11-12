import { FC } from 'react';
import { HomePage } from '../../Pages/HomePage/HomePage';

export const Home: FC = () => {
  return (
    <div className="w-screen h-screen text-white flex justify-center items-center">
      <img
        className="absolute top-0 w-full h-[200px]"
        src="/hero-image.jpg"
        alt="hero"
      />
      <div className="shadow-xl bg-gray-200 p-4 border border-neutral-700 rounded-lg w-[90vw] bg-primary z-20">
        <HomePage />
      </div>
    </div>
  );
};
