import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CountryInfo, CountryNeighbour } from '../../types/Countries';
import { CountryData } from './CountryData';
import { CountrysNeighbour } from './CountryNeighbour';
import { CountryDataHeader } from './CountryDataHeader';
import { useDocumentTitle } from 'usehooks-ts';

export const CountryPage = () => {
  const params = useParams();
  const [data, setData] = useState<CountryInfo>();
  const [neighbours, setNeighbours] = useState<CountryNeighbour[]>();

  useDocumentTitle('World Ranks - Country Page');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get<CountryInfo[]>(
          `https://restcountries.com/v3.1/name/${params.name}?fullText=true&fields=flags,name,population,area,capital,subregion,languages,currencies,continents,borders`
        );
        setData(res.data[0]);
        if (res.data[0].borders.length === 0) return;
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

  return (
    <div className="w-screen relative text-white">
      <img
        className="w-full h-[200px]"
        src="src/assets/hero-image.jpg"
        alt="hero"
      />
      <div className="absolute shadow-xl top-[570px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-200 border border-neutral-700 rounded-lg w-[50vw] max-xl:w-[640px] max-md:w-full">
        {data && (
          <div className="h-[70vh] relative rounded-lg">
            <img
              src={data.flags.png}
              alt="flag"
              className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-[-95px] h-32 rounded-lg"
            />
            <CountryDataHeader data={data} />
            <CountryData data={data} />
            <CountrysNeighbour neighbours={neighbours} />
          </div>
        )}
      </div>
    </div>
  );
};
