import { FC } from 'react';
import {
  createColumnHelper,
  useReactTable,
  getCoreRowModel,
  flexRender,
} from '@tanstack/react-table';

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
};

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

export const TableContent: FC<Props> = ({ data }) => {
  const columnHelper = createColumnHelper<Column>();
  const columns = [
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

  const table = useReactTable({
    data,
    columns,
    debugTable: true,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="h-[70vh] overflow-y-auto w-full">
      <table className="w-full">
        <thead className="sticky top-0 w-full">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  <div className="text-text text-start py-5 px-2 border-b">
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="w-full">
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className=" text-light py-5 px-3">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
