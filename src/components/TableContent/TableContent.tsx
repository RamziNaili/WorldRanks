import { FC } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from '@tanstack/react-table';
import { columns } from './table';
import { useData } from '../../core/hooks/useData';
import { useNavigate } from 'react-router-dom';

export const TableContent: FC = () => {
  const { data } = useData();
  const navigate = useNavigate();

  const table = useReactTable({
    data,
    columns,
    debugTable: false,
    getCoreRowModel: getCoreRowModel(),
  });

  const handleClick = (
    e: React.MouseEvent<HTMLTableCellElement, MouseEvent>
  ) => {
    const target = e.target as HTMLTableCellElement;
    navigate(`/${target.textContent}`);
  };

  return (
    <div className="h-full max-md:h-[345px] overflow-auto w-full">
      <table className="w-full">
        <thead className="sticky top-[-1px] w-full">
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
                <td
                  key={cell.id}
                  onClick={(e) => {
                    if (cell.column.id === 'name') handleClick(e);
                  }}
                  className={`text-light py-2 md:py-5 px-2 md:px-3 ${
                    cell.column.id === 'name' && 'cursor-pointer'
                  }`}
                >
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
