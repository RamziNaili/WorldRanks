import { FC } from 'react';
import { Regions } from './Regions';
import { SortBy } from './SortBy';

export const Filter: FC = () => {
  return (
    <div className="w-[400px] p-5">
      <SortBy />
      <Regions />
      <div className="mt-5">
        <p className="text-sm text-text font-beViet mb-3">Status</p>
        <div className="flex items-center h-8 gap-4">
          <input type="checkbox" id="onu" className="w-5 h-5 color" />
          <label htmlFor="onu">
            <p className="select-none text-textLight font-beViet">
              Member of the United Nations
            </p>
          </label>
        </div>

        <div className="flex items-center h-8 gap-4">
          <input type="checkbox" id="inde" className="w-5 h-5" />
          <label htmlFor="inde">
            <p className="select-none text-textLight font-beViet">
              Independent
            </p>
          </label>
        </div>
      </div>
    </div>
  );
};
