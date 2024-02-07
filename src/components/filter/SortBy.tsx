import { FC } from 'react';
import { SortType, useFilterStore } from '../../core/store/UseFilterStore';

export const SortBy: FC = () => {
  const setSortBy = useFilterStore((state) => state.setSortBy);

  return (
    <>
      <p className="text-sm text-text font-beViet mb-3">Sort by</p>
      <select
        className="w-5/6 border border-neutral-500 outline-none rounded-lg px-4 py-3 text-textLight"
        onChange={(e) => setSortBy(e.target.value as SortType)}
      >
        <option value={SortType.population}>Population</option>
        <option value={SortType.area}>Area (km²)</option>
        <option value={SortType.name}>Name</option>
      </select>
    </>
  );
};
