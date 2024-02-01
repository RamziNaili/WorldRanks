/// <reference types="vite-plugin-svgr/client" />

import { FC } from 'react';
import Search from '../../assets/Search.svg?react';

export const Home: FC = () => {
  return (
    <div className="w-screen relative text-white">
      <img
        className="w-full h-[300px]"
        src="src/assets/hero-image.jpg"
        alt="hero"
      />
      <div className="absolute top-[23rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-200 p-4 border border-neutral-700 rounded-lg w-[90vw] ">
        <div className="flex justify-between">
          <p className="font-beViet font-semibold text-light">
            Found 234 counties
          </p>
          <div className="flex items-center bg-secondary h-10 rounded-lg p-2">
            <Search className="bg-secondary" />
            <input
              className="text-light placeholder:bg-secondary w-80 border-none outline-none bg-secondary p-2"
              type="text"
              placeholder="Search by Name, Region, Subregion"
            />
          </div>
        </div>
        <div className="grid grid-cols-[auto_1fr] mt-10">
          <div className="w-[400px] bg-yellow-100">
            <div>
              <p>sort by</p>
              <select name="" id=""></select>
            </div>
            <div>
              <p>region</p>
              <p>americas, antartic, africa, asia, europe</p>
            </div>
            <div>
              <div className="flex">
                <input type="checkbox" />
                <p>Member of the United Nations</p>
              </div>
              <div className="flex">
                <input type="checkbox" />
                <p>Independent</p>
              </div>
            </div>
          </div>
          <div className="flex gap-24 text-light">
            <p>Flag</p>
            <p>Name</p>
            <p>Population</p>
            <p>Area (km²)</p>
            <p>Region</p>
          </div>
        </div>
      </div>
    </div>
  );
};
