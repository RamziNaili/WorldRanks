import { FC } from 'react';

export const TableContent: FC = () => {
  return (
    <div>
      <div className="grid grid-cols-[10%_30%_30%_15%_15%] text-text p-5">
        <p>Flag</p>
        <p>Name</p>
        <p>Population</p>
        <p>Area (km²)</p>
        <p>Region</p>
      </div>
      <span className="h-[1px] block bg-text w-full" />
    </div>
  );
};
