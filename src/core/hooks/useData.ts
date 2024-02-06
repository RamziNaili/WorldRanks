import { useEffect, useState } from 'react';
import { useFilterStore } from '../store/UseFilterStore';
import axios from 'axios';
import { Country } from '../../types/Countries';

export const useData = () => {
  const sortBy = useFilterStore((state) => state.sortBy);
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
      } catch (error) {
        console.log('Error in Home component', error);
      }
    };
    sortData();
  }, [sortBy, setData]);

  return { data };
};
