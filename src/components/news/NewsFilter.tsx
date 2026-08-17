"use client"


import { useMemo, useState } from 'react';
import { FilterSidebar } from './FilterSidebar';
import { Button } from '../ui/button';
import { customBlur } from '@/app/fonts';
import { Heading } from '../ui/heading';
import { ArticleCard } from '../ArticleCard';
import { NEWS } from './data';
import { defaultNewsFilters, filterNews, getNewsYearOptions } from './actions';
import { Text } from '../ui/text';


export const NewsFilter: React.FC = () => {
  const [filters, setFilters] = useState(defaultNewsFilters);
  const [appliedFilters, setAppliedFilters] = useState(defaultNewsFilters);

  const yearOptions = useMemo(() => getNewsYearOptions(NEWS), []);

  // TODO: once a real API exists, replace this with a fetch keyed on
  // `appliedFilters` (e.g. useEffect + setResults) instead of filtering
  // the static `NEWS` array in memory.
  const results = useMemo(
    () => filterNews(NEWS, appliedFilters),
    [appliedFilters],
  );

  const handleSearch = () => setAppliedFilters(filters);
  const handleClear = () => {
    setFilters(defaultNewsFilters);
    setAppliedFilters(defaultNewsFilters);
  };

  return (
    <section className="w-full h-auto mt-20">
      <div className="w-full max-w-360 h-auto ml-auto mr-auto">

        <div className='flex items-center justify-between'>
          <Heading level={"h2"} className={`${customBlur.className} ml-3 text-[48px] leading-11.5 font-medium mb-5 text-rede-yellow`}>
            Todas <br /> Notícias
          </Heading>

          <div className="flex justify-end gap-3 px-6 py-4">
            {/* 
            <Button variant={"secondary"}>
              Ordenar por
            </Button> 
            */}

            <Text className="text-[14px] leading-4" >
              {results.length}{" "}
              {results.length === 1
                ? "resultado"
                : "resultados"}
            </Text>
          </div>
        </div>

        <div className='w-full flex mt-10'>
          <div className='w-82.75'>
            <FilterSidebar
              filters={filters}
              onFiltersChange={setFilters}
              onSearch={handleSearch}
              onClear={handleClear}
              yearOptions={yearOptions}
            />
          </div>

          {results.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 px-6 pb-6">
              {results.map((news) => (
                <ArticleCard newsData={news} key={news?.id} />
              ))}
            </div>
          ) : (
            <div className="flex-1 flex items-center justify-center px-6 pb-6 text-rede-white">
              Nenhuma notícia encontrada para os filtros selecionados.
            </div>
          )}
        </div>

      </div>
    </section >
  )
}
