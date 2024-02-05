import { FC } from 'react';
import { Regions } from './Regions';
import { SortBy } from './SortBy';
import { Status } from './Status';

export const Filter: FC = () => {
  return (
    <div className="w-[400px] p-5">
      <SortBy />
      <Regions />
      <Status />
    </div>
  );
};
