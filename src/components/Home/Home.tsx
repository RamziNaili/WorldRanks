/// <reference types="vite-plugin-svgr/client" />

import { FC, useEffect, useState } from 'react';
import { Filter } from '../filter/Filter';
import { TableContent } from '../TableContent/TableContent';
import { SearchBar } from '../filter/SearchBar';
import axios from 'axios';

export const Home: FC = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('https://restcountries.com/v3.1/all');
        setData(res.data);
        console.log('Data from API', data);
      } catch (error) {
        console.log('Error in Home component', error);
      }
    };
    fetchData();
    console.log('Home component mounted');
  }, []);

  return (
    <div className="w-screen relative text-white">
      <img
        className="w-full h-[300px]"
        src="src/assets/hero-image.jpg"
        alt="hero"
      />
      <div className="absolute top-[570px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-200 p-4 border border-neutral-700 rounded-lg w-[90vw] ">
        <div className="flex justify-between p-5">
          <p className="font-beViet font-semibold text-text ">
            Found 234 counties
          </p>
          <SearchBar />
        </div>
        <div className="grid grid-cols-[auto_1fr] mt-2">
          <Filter />
          <TableContent data={data} />
        </div>
      </div>
    </div>
  );
};
