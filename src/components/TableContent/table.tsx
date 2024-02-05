import { createColumnHelper } from '@tanstack/react-table';

type Column = {
  flags: {
    png: string;
  };
  name: {
    common: string;
  };
  population: number;
  area: number;
  region: string;
};

const columnHelper = createColumnHelper<Column>();

export const columns = [
  columnHelper.accessor((row) => row.flags.png, {
    id: 'flag',
    header: () => 'Flag',
    cell: (info) => <img src={info.getValue()} className="w-12 rounded" />,
  }),
  columnHelper.accessor((row) => row.name.common, {
    id: 'name',
    header: () => 'Name',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('population', {
    header: () => 'Population',
    cell: (info) => info.getValue().toLocaleString('en-US'),
  }),
  columnHelper.accessor('area', {
    header: () => 'Area',
    cell: (info) => info.getValue().toLocaleString('en-US'),
  }),
  columnHelper.accessor('region', {
    header: () => 'Region',
    cell: (info) => info.getValue(),
  }),
];
