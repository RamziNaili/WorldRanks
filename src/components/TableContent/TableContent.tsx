import { FC, useEffect, useState } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from '@tanstack/react-table';
import { columns } from './table';
import { useFilterStore } from '../../core/store/UseFilterStore';
import { Country } from '../../types/Countries';

type Props = {
  data: Country[];
};

export const TableContent: FC<Props> = ({ data }) => {
  const [countries, setCountries] = useState(data);
  const sortBy = useFilterStore((state) => state.sortBy);

  useEffect(() => {
    if (sortBy === 'name') {
      setCountries(
        data.sort((a, b) => a.name.common.localeCompare(b.name.common))
      );
    }
    if (sortBy === 'population') {
      setCountries(data.sort((a, b) => a.population - b.population));
    }
    if (sortBy === 'area') {
      setCountries(data.sort((a, b) => a.area - b.area));
    }
  }, [data, sortBy]);

  const table = useReactTable({
    data: countries,
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
