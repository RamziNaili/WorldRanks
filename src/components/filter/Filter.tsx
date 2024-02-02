import { FC } from 'react';

export const Filter: FC = () => {
  return (
    <div className="w-[400px] p-5">
      <div>
        <p className="text-sm text-light font-beViet mb-3">Sort by</p>
        <select className="w-5/6 border border-neutral-500 outline-none rounded-lg px-4 py-3">
          <option value="population">Population</option>
          <option value="Flag">Flag</option>
          <option value="Name">Name</option>
          <option value="Population">Population</option>
          <option value="Area">Area (km²)</option>
          <option value="Region">Region</option>
        </select>
      </div>
      <div className="mt-5 w-full">
        <p className="text-sm text-light font-beViet mb-3">Region</p>
        <div className="flex gap-3 flex-wrap w-[300px]">
          <p className="text-light font-beViet px-3">Americas</p>
          <p className="text-light font-beViet px-3">Antartic</p>
          <p className="text-light font-beViet px-3">Africa</p>
          <p className="text-light font-beViet px-3">Asia</p>
          <p className="text-light font-beViet px-3">Europe</p>
        </div>
      </div>
      <div className="mt-5">
        <p className="text-sm text-light font-beViet mb-3">Status</p>
        <div className="flex items-center h-8 gap-4">
          <input type="checkbox" id="onu" className="w-5 h-5 color" />
          <label htmlFor="onu">
            <p className="select-none text-light font-beViet">
              Member of the United Nations
            </p>
          </label>
        </div>
        <div className="flex items-center h-8 gap-4">
          <input type="checkbox" id="inde" className="w-5 h-5" />
          <label htmlFor="inde">
            <p className="select-none text-light font-beViet">Independent</p>
          </label>
        </div>
      </div>
    </div>
  );
};
