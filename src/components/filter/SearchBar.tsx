import { FC } from 'react';
import Search from '../../assets/Search.svg?react';
import { useSearchBarStore } from '../../core/store/UseSearchBarStore';

export const SearchBar: FC = () => {
  const setSearch = useSearchBarStore((state) => state.setSearch);

  return (
    <div className="flex items-center bg-secondary h-10 rounded-lg">
      <Search className="bg-secondary ml-2" />
      <input
        className="w-80 border-none outline-none bg-secondary p-2 rounded-lg"
        type="text"
        placeholder="Search by Name, Region, Subregion"
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};
