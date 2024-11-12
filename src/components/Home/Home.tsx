import { FC } from 'react';
import { HomePage } from '../../Pages/HomePage/HomePage';

export const Home: FC = () => {
  return (
    <div className="w-screen text-white">
      <img className="w-full h-[200px]" src="/hero-image.jpg" alt="hero" />
      <div className="absolute shadow-xl top-[530px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-200 p-4 border border-neutral-700 rounded-lg w-[90vw] bg-primary">
        <HomePage />
      </div>
    </div>
  );
};
