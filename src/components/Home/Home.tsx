/// <reference types="vite-plugin-svgr/client" />

import { FC } from 'react';
import Search from '../../assets/Search.svg?react';
import { Filter } from '../filter/Filter';
import { TableContent } from '../TableContent/TableContent';

export const Home: FC = () => {
  return (
    <div className="w-screen relative text-white">
      <img
        className="w-full h-[300px]"
        src="src/assets/hero-image.jpg"
        alt="hero"
      />
      <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-200 p-4 border border-neutral-700 rounded-lg w-[90vw] ">
        <div className="flex justify-between p-5">
          <p className="font-beViet font-semibold text-text ">
            Found 234 counties
          </p>
          <div className="flex items-center bg-secondary h-10 rounded-lg">
            <Search className="bg-secondary ml-2" />
            <input
              className="w-80 border-none outline-none bg-secondary p-2 rounded-lg"
              type="text"
              placeholder="Search by Name, Region, Subregion"
            />
          </div>
        </div>
        <div className="grid grid-cols-[auto_1fr] mt-2">
          <Filter />
          <TableContent />
        </div>
      </div>
    </div>
  );
};
