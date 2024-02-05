import { FC } from 'react';

export const SortBy: FC = () => {
  return (
    <>
      <p className="text-sm text-text font-beViet mb-3">Sort by</p>
      <select className="w-5/6 border border-neutral-500 outline-none rounded-lg px-4 py-3 text-textLight ">
        <option value="Name">Name</option>
        <option value="Population">Population</option>
        <option value="Area">Area (km²)</option>
      </select>
    </>
  );
};
