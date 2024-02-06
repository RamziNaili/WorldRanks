import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

type CountryInfo = {
  flags: {
    png: string;
  };
  name: {
    common: string;
    official: string;
  };
  population: number;
  area: number;
  capital: string;
  subregion: string;
  languages: {
    [key: string]: string;
  };
  currencies: {
    [key: string]: {
      name: string;
    };
  };
  continents: string;
  borders: string[];
};

export const CountryPage = () => {
  const params = useParams();
  const [data, setData] = useState<CountryInfo>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get<CountryInfo[]>(
          `https://restcountries.com/v3.1/name/${params.name}?fields=flags,name,population,area,capital,subregion,languages,currencies,continents,borders`
        );
        setData(res.data[0]);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [params.name]);

  return (
    <div className="w-screen relative text-white">
      <img
        className="w-full h-[200px]"
        src="src/assets/hero-image.jpg"
        alt="hero"
      />
      <div className="absolute shadow-xl top-[530px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-200 p-4 border border-neutral-700 rounded-lg w-[50vw]">
        {data && (
          <div className="p-5 h-[75vh] relative">
            <img
              src={data.flags.png}
              alt="flag"
              className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-0 w-48 rounded-lg"
            />
            <div className="w-full flex items-center flex-col mt-16">
              <p>{data.name.common}</p>
              <p>{data.name.official}</p>
            </div>
            <div className="flex">
              <div className="flex">
                <p>population</p>
                <p>{data.population}</p>
              </div>
              <div className="flex">
                <p>Area (km²)</p>
                <p>{data.area}</p>
              </div>
            </div>
            <div className="w-full flex justify-between">
              <p>Capital</p>
              <p>{data.capital}</p>
            </div>
            <div className="w-full flex justify-between">
              <p>Subregion</p>
              <p>{data.subregion}</p>
            </div>
            <div className="w-full flex justify-between">
              <p>Languages</p>
              <p>{Object.values(data.languages).join(', ')}</p>
            </div>
            <div className="w-full flex justify-between">
              <p>Currencies</p>
              <p>{Object.values(data.currencies).join(', ')}</p>
            </div>
            <div className="w-full flex justify-between">
              <p>Continents</p>
              <p>{data.continents}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
