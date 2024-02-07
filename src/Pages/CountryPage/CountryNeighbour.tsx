import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { CountryNeighbour } from './types/countryPage';

type Props = {
  neighbours: CountryNeighbour[] | undefined;
};

export const CountrysNeighbour: FC<Props> = ({ neighbours }) => {
  const navigate = useNavigate();

  const handleClick = (name: string) => {
    navigate(`/${name}`);
  };

  return (
    <div className="p-4">
      <p className="mb-5">Neighbouring Countries</p>
      <div className="flex gap-4 overflow-x-auto w-full">
        {neighbours?.map((neighbour) => (
          <div
            key={neighbour.name.common}
            onClick={() => handleClick(neighbour.name.common)}
            className="flex flex-col items-center justify-center h-24 gap-2 cursor-pointer rounded-lg p-2"
          >
            <img
              src={neighbour.flags.png}
              alt="flag"
              className="w-20 h-20 rounded-lg"
            />
            <p className="text-xs w-24 text-center">{neighbour.name.common}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
