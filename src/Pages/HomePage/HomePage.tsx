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
      <div className="flex justify-between items-center p-5">
        <p className="font-beViet font-semibold text-text ">
          {`Found ${data.length} counties`}
        </p>
        <SearchBar />
      </div>
      <div className="md:grid md:grid-cols-[auto_1fr] mt-2 h-[62vh] max-md:h-auto">
        <Filter />
        <TableContent />
      </div>
    </>
  );
};
