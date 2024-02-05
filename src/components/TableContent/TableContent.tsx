import { FC } from 'react';

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
};

export const TableContent: FC<Props> = ({ data }) => {
  return (
    <div>
      <div className="grid grid-cols-[10%_35%_25%_15%_15%] text-text p-5">
        <p>Flag</p>
        <p>Name</p>
        <p>Population</p>
        <p>Area (km²)</p>
        <p>Region</p>
      </div>
      <span className="h-[1px] block bg-text w-full" />
      <div className="bg-gray-50 max-h-[450px] overflow-y-scroll scrollbar-hide">
        <div>
          {data.map((country) => (
            <div
              key={`country-` + country.name.common}
              className="grid grid-cols-[10%_35%_25%_15%_15%] grid-rows text-light py-5 px-3"
            >
              <img
                src={country.flags.png}
                alt="flag"
                className="w-12 rounded"
              />
              <p>{country.name.common}</p>
              <p>{country.population}</p>
              <p>{country.area}</p>
              <p>{country.region}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
