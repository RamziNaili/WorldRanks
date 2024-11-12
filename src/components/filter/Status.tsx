import { FC } from 'react';
import { useFilterStore } from '../../core/store/UseFilterStore';

export const Status: FC = () => {
  const setUnitedStates = useFilterStore((state) => state.setUnitedStates);
  const setIndepended = useFilterStore((state) => state.setIndepended);

  return (
    <div className="mt-5">
      <p className="text-sm text-text font-beViet mb-3">Status</p>
      <div className="flex flex-col md:flex-row gap-1 md:gap-3 xl:flex-col">
        <div className="flex items-center h-8 gap-4">
          <input
            type="checkbox"
            id="unitedStates"
            className="w-5 h-5 color"
            onChange={setUnitedStates}
          />
          <label htmlFor="unitedStates">
            <p className="select-none text-textLight font-beViet">
              Member of the United Nations
            </p>
          </label>
        </div>

        <div className="flex items-center h-8 gap-4">
          <input
            type="checkbox"
            id="inde"
            className="w-5 h-5"
            onChange={setIndepended}
          />
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
