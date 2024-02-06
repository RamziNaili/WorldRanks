import { FC } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from '@tanstack/react-table';
import { columns } from './table';
import { Country } from '../../types/Countries';
import { useData } from '../../core/hooks/useData';

type Props = {
  data: Country[];
};

export const TableContent: FC<Props> = () => {
  const { data } = useData();

  const table = useReactTable({
    data,
    columns,
    debugTable: false,
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
