import { FC } from 'react';

export const TableContent: FC = () => {
  return (
    <div className="flex gap-24 text-light p-5">
      <p>Flag</p>
      <p>Name</p>
      <p>Population</p>
      <p>Area (km²)</p>
      <p>Region</p>
    </div>
  );
};
