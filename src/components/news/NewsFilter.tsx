"use client"

import { useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { FilterSidebar } from './FilterSidebar';
import { customBlur } from '@/app/fonts';
import { Heading } from '../ui/heading';
import { ArticleCard } from '../ArticleCard';
import { categories, NEWS } from './data';
import { defaultNewsFilters, filterNews, getNewsYearOptions, NewsFilters } from './actions';
import { Text } from '../ui/text';
import { countriesList } from '../network/filters';


const normalizeTag = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .toLowerCase();

const getInitialFilters = (tag: string): NewsFilters => {
  const normalizedTag = normalizeTag(tag);

  if (!normalizedTag) return defaultNewsFilters;

  const country = countriesList.find(
    (option) => normalizeTag(option.value) === normalizedTag || normalizeTag(option.label) === normalizedTag,
  );

  if (country) {
    return { ...defaultNewsFilters, country: country.value };
  }

  const category = categories.find(
    (option) => normalizeTag(option.value) === normalizedTag || normalizeTag(option.label) === normalizedTag,
  );

  if (category) {
    return { ...defaultNewsFilters, category: category.value };
  }

  return { ...defaultNewsFilters, search: tag };
};

const NewsFilterContent: React.FC<{ initialTag: string }> = ({ initialTag }) => {
  const [filters, setFilters] = useState(() => getInitialFilters(initialTag));

  const yearOptions = useMemo(() => getNewsYearOptions(NEWS), []);
  const results = useMemo(
    () => filterNews(NEWS, filters),
    [filters],
  );

  const handleClear = () => setFilters(defaultNewsFilters);

  return (
    <section className="w-full h-auto mt-20">
      <div className="w-full max-w-360 h-auto ml-auto mr-auto">

        <div className='flex items-center justify-between'>
          <Heading level={"h2"} className={`${customBlur.className} ml-3 text-[48px] leading-11.5 font-medium mb-5 text-rede-yellow`}>
            Todas <br /> Notícias
          </Heading>

          <div className="flex justify-end gap-3 px-6 py-4">
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

export const NewsFilter: React.FC = () => {
  const searchParams = useSearchParams();
  const tag = searchParams.get('tag') ?? '';

  return <NewsFilterContent key={tag} initialTag={tag} />;
}
