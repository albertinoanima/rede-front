"use client"


import { FilterSidebar } from './FilterSidebar';
import { Button } from '../ui/button';
import { customBlur } from '@/app/fonts';
import { Heading } from '../ui/heading';
import { ArticleCard } from '../ArticleCard';
import { NEWS } from './news';
import Link from 'next/link';




export const NewsFilter: React.FC = () => {
  return (
    <section className="w-full h-auto mt-20">
      <div className="w-full max-w-360 h-auto ml-auto mr-auto">

        <div className='flex items-center justify-between'>
          <Heading level={"h2"} className={`${customBlur.className} ml-3 text-[48px] leading-11.5 font-medium mb-5 text-rede-yellow`}>
            Todas <br /> Notícias
          </Heading>

          <div className="flex justify-end gap-3 px-6 py-4">
            <Button variant={"secondary"}>
              Ordenar por
            </Button>
            <Button variant={"secondary"}>
              8 resultados
            </Button>
          </div>
        </div>

        <div className='w-full flex mt-10'>
          <div className='w-82.75'>
            <FilterSidebar />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 px-6 pb-6">
            {NEWS.map((news) => (
              <Link key={news.id} href={"/news-details?id=" + news.id}>
                <ArticleCard newsData={news}/>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </section >
  )
}