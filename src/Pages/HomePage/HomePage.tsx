import { useDocumentTitle } from 'usehooks-ts';
import { TableContent } from '../../components/TableContent/TableContent';
import { Filter } from '../../components/filter/Filter';
import { SearchBar } from '../../components/filter/SearchBar';
import { useData } from '../../core/hooks/useData';

export const HomePage = () => {
  const { data } = useData();
  useDocumentTitle('World Ranks - Home Page');

  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between gap-5 lg:items-center p-2 md:p-5">
        <p className="font-beViet font-semibold text-text ">
          {`Found ${data.length} counties`}
        </p>
        <SearchBar />
      </div>
      <div className="flex flex-col xl:flex-row mt-2 h-[62vh] max-md:h-auto">
        <Filter />
        <TableContent />
      </div>
    </>
  );
};
