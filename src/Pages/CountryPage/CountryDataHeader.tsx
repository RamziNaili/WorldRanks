import { FC } from 'react';
import { CountryInfo } from '../../types/Countries';

type Props = {
  data: CountryInfo;
};

export const CountryDataHeader: FC<Props> = ({ data }) => {
  return (
    <>
      <div className="w-full flex items-center flex-col mt-20 mb-4">
        <p className="text-3xl mb-3">{data.name.common}</p>
        <p className="text-sm">{data.name.official}</p>
      </div>
      <div className="flex justify-center gap-10">
        <div className="flex items-center justify-center p-4 rounded-lg bg-secondary h-10 text-light md:w-64">
          <p className="bg-secondary border-r border-slate-600 pr-4">
            population
          </p>
          <p className="bg-secondary pl-4">
            {data.population.toLocaleString('en-US')}
          </p>
        </div>
        <div className="flex items-center justify-center p-4 rounded-lg bg-secondary h-10 text-light md:w-64">
          <p className="bg-secondary border-r border-slate-600 pr-4">
            Area (km²)
          </p>
          <p className="bg-secondary pl-4">
            {data.area.toLocaleString('en-US')}
          </p>
        </div>
      </div>
    </>
  );
};
