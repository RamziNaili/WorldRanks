import { useEffect, useState } from 'react';
import { RegionsName, useFilterStore } from '../store/UseFilterStore';
import axios from 'axios';
import { Country } from '../../types/Countries';

export const useData = () => {
  const sortBy = useFilterStore((state) => state.sortBy);
  const regions = useFilterStore((state) => state.regions);
  const [data, setData] = useState<Country[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          'https://restcountries.com/v3.1/all?fields=name,flags,population,area,region'
        );
        setData(res.data);
      } catch (error) {
        console.log('Error in Home component', error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const sortData = async () => {
      try {
        const res = await axios.get<Country[]>(
          'https://restcountries.com/v3.1/all?fields=name,flags,population,area,region'
        );
        if (sortBy === 'name') {
          setData(
            res.data.sort((a, b) => a.name.common.localeCompare(b.name.common))
          );
        }
        if (sortBy === 'population') {
          setData(res.data.sort((a, b) => a.population - b.population));
        }
        if (sortBy === 'area') {
          setData(res.data.sort((a, b) => a.area - b.area));
        }
        if (regions.length > 0) {
          setData((prev) =>
            prev.filter((country) =>
              regions.includes(country.region as RegionsName)
            )
          );
        }
      } catch (error) {
        console.log('Error in Home component', error);
      }
    };
    sortData();
  }, [sortBy, setData, regions]);

  return { data };
};
