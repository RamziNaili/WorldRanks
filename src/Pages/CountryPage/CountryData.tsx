import { FC } from 'react';
import { CountryInfo } from './types/countryPage';

type Props = {
  data: CountryInfo;
};

export const CountryData: FC<Props> = ({ data }) => {
  return (
    <>
      <div className="w-full flex justify-between border-t border-slate-600 p-4 mt-10">
        <p>Capital</p>
        <p className="text-light">{data.capital}</p>
      </div>
      <div className="w-full flex justify-between border-y border-slate-600 p-4">
        <p>Subregion</p>
        <p className="text-light">{data.subregion}</p>
      </div>
      <div className="w-full flex justify-between border-b border-slate-600 p-4">
        <p>Languages</p>
        <p className="text-light">{Object.values(data.languages).join(', ')}</p>
      </div>
      <div className="w-full flex justify-between border-b border-slate-600 p-4">
        <p>Currencies</p>
        {Object.values(data.currencies)[0] && (
          <p className="text-light">{Object.values(data.currencies)[0].name}</p>
        )}
      </div>
      <div className="w-full flex justify-between border-b border-slate-600 p-4">
        <p>Continents</p>
        <p className="text-light">{data.continents}</p>
      </div>
    </>
  );
};
