import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CountryInfo, CountryNeighbour } from './types/countryPage';

export const CountryPage = () => {
  const params = useParams();
  const [data, setData] = useState<CountryInfo>();
  const [neighbours, setNeighbours] = useState<CountryNeighbour[]>();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get<CountryInfo[]>(
          `https://restcountries.com/v3.1/name/${params.name}?fullText=true&fields=flags,name,population,area,capital,subregion,languages,currencies,continents,borders`
        );
        setData(res.data[0]);
        const neighbours = await axios.get<CountryNeighbour[]>(
          `https://restcountries.com/v3.1/alpha?codes=${res.data[0].borders.join(
            ','
          )}&fields=flags,name`
        );
        setNeighbours(neighbours.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [params.name]);

  const handleClick = (name: string) => {
    navigate(`/${name}`);
  };

  return (
    <div className="w-screen relative text-white">
      <img
        className="w-full h-[200px]"
        src="src/assets/hero-image.jpg"
        alt="hero"
      />
      <div className="absolute shadow-xl top-[500px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-200 border border-neutral-700 rounded-lg w-[50vw]">
        {data && (
          <div className="h-[70vh] relative rounded-lg">
            <img
              src={data.flags.png}
              alt="flag"
              className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-[-95px] h-32 rounded-lg"
            />
            <div className="w-full flex items-center flex-col mt-20 mb-4">
              <p className="text-3xl mb-3">{data.name.common}</p>
              <p className="text-sm">{data.name.official}</p>
            </div>
            <div className="flex justify-center gap-10">
              <div className="flex items-center justify-center p-4 rounded-lg bg-secondary h-10 text-light w-64">
                <p className="bg-secondary border-r border-slate-600 pr-4">
                  population
                </p>
                <p className="bg-secondary pl-4">
                  {data.population.toLocaleString('en-US')}
                </p>
              </div>
              <div className="flex items-center justify-center p-4 rounded-lg bg-secondary h-10 text-light w-64">
                <p className="bg-secondary border-r border-slate-600 pr-4">
                  Area (km²)
                </p>
                <p className="bg-secondary pl-4">
                  {data.area.toLocaleString('en-US')}
                </p>
              </div>
            </div>
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
              <p className="text-light">
                {Object.values(data.languages).join(', ')}
              </p>
            </div>
            <div className="w-full flex justify-between border-b border-slate-600 p-4">
              <p>Currencies</p>
              {Object.values(data.currencies)[0] && (
                <p className="text-light">
                  {Object.values(data.currencies)[0].name}
                </p>
              )}
            </div>
            <div className="w-full flex justify-between border-b border-slate-600 p-4">
              <p>Continents</p>
              <p className="text-light">{data.continents}</p>
            </div>
            <div className="p-4">
              <p className="mb-5">Neighbouring Countries</p>
              <div className="flex gap-4 overflow-x-auto w-full">
                {neighbours?.map((neighbour) => (
                  <div
                    key={neighbour.name.common}
                    onClick={() => handleClick(neighbour.name.common)}
                    className="flex flex-col items-center justify-center h-20 gap-2 cursor-pointer rounded-lg p-2"
                  >
                    <img
                      src={neighbour.flags.png}
                      alt="flag"
                      className="w-20 h-20 rounded-lg"
                    />
                    <p className="text-xs w-20 text-center">
                      {neighbour.name.common}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
