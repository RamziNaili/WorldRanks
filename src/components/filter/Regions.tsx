import { FC } from 'react';
import { RegionsName, useFilterStore } from '../../core/store/UseFilterStore';

export const Regions: FC = () => {
  const allRegions = useFilterStore((state) => state.regions);
  const setRegions = useFilterStore((state) => state.setRegions);

  const handleClick = (region: RegionsName) => {
    setRegions(region);
  };

  const regions = [
    RegionsName.Americas,
    RegionsName.Asia,
    RegionsName.Europe,
    RegionsName.Africa,
    RegionsName.Oceania,
    RegionsName.Antarctic,
  ];

  return (
    <div className="mt-5 w-full">
      <p className="text-sm text-text font-beViet mb-3">Region</p>
      <div className="flex md:gap-3 flex-wrap">
        {regions.map((region) => {
          return (
            <p
              key={'region-' + region}
              onClick={() => handleClick(region)}
              className={`text-text font-beViet p-2 md:p-3 cursor-pointer ${
                allRegions.includes(region) &&
                'bg-secondary text-white rounded-xl'
              }`}
            >
              {region}
            </p>
          );
        })}
      </div>
    </div>
  );
};
