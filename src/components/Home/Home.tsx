import { FC } from 'react';
import { Filter } from '../filter/Filter';
import { TableContent } from '../TableContent/TableContent';
import { SearchBar } from '../filter/SearchBar';
import { useData } from '../../core/hooks/useData';

export const Home: FC = () => {
  const { data } = useData();

  return (
    <div className="w-screen relative text-white">
      <img
        className="w-full h-[200px]"
        src="src/assets/hero-image.jpg"
        alt="hero"
      />
      <div className="absolute shadow-xl top-[530px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-200 p-4 border border-neutral-700 rounded-lg w-[90vw] ">
        <div className="flex justify-between p-5">
          <p className="font-beViet font-semibold text-text ">
            {`Found ${data.length} counties`}
          </p>
          <SearchBar />
        </div>
        <div className="grid grid-cols-[auto_1fr] mt-2">
          <Filter />
          <TableContent />
        </div>
      </div>
    </div>
  );
};
