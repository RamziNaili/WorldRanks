import { useEffect, useState } from 'react';
import { RegionsName, useFilterStore } from '../store/UseFilterStore';
import axios from 'axios';
import { Country } from '../../types/Countries';
import { useSearchBarStore } from '../store/UseSearchBarStore';

export const useData = () => {
  const sortBy = useFilterStore((state) => state.sortBy);
  const regions = useFilterStore((state) => state.regions);
  const unitedStates = useFilterStore((state) => state.UnitedStates);
  const independed = useFilterStore((state) => state.Independed);
  const [data, setData] = useState<Country[]>([]);
  const search = useSearchBarStore((state) => state.search);

  useEffect(() => {
    const sortData = async () => {
      try {
        const res = await axios.get<Country[]>(
          `https://restcountries.com/v3.1/independent?status=${independed}&fields=name,flags,population,area,region`
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
        if (search.length > 0) {
          setData((prev) =>
            prev.filter((country) => country.name.common.includes(search))
          );
        }
      } catch (error) {
        console.log('Error in Home component', error);
      }
    };
    sortData();
  }, [sortBy, setData, regions, independed, unitedStates, search]);

  useEffect(() => {
    setData((prev) =>
      prev.filter((country) => country.unMember === unitedStates)
    );
  }, [unitedStates]);

  return { data };
};
