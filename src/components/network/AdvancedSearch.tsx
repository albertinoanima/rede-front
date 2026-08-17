"use client"

import { useMemo, useState } from 'react';
import { customBlur } from '@/app/fonts';
import { ProfileCard } from '../ProfileCard';
import { Heading } from '../ui/heading';
import { defaultNetworkFilters, FilterSidebar } from './FilterSidebar';
import { filterProfiles } from './actions';
import { profiles } from './data';
import { Text } from '../ui/text';



export const AdvancedSearch: React.FC = () => {
    const [filters, setFilters] = useState(defaultNetworkFilters);
    const [appliedFilters, setAppliedFilters] = useState(defaultNetworkFilters);

    // TODO: once a real API exists, replace this with a fetch keyed on
    // `appliedFilters` (e.g. useEffect + setResults) instead of filtering
    // the static `profiles` array in memory.
    const results = useMemo(
        () => filterProfiles(profiles, appliedFilters),
        [appliedFilters],
    );

    const handleSearch = () => setAppliedFilters(filters);
    const handleClear = () => {
        setFilters(defaultNetworkFilters);
        setAppliedFilters(defaultNetworkFilters);
    };

    return (
        <section className="w-full h-auto">

            <div className="w-full max-w-360 h-auto ml-auto mr-auto">
                <div className='flex items-center justify-between mt-5'>
                    <Heading level={"h2"} className={`${customBlur.className} ml-3 text-[48px] leading-11.5 font-medium mb-5 text-rede-yellow`}>
                        Pesquisa <br /> Avançada
                    </Heading>

                    <div className="flex justify-end gap-3 px-6 py-4">
                        {/* 
                        <Button variant={"secondary"}>
                            Ordenar por
                        </Button> 
                        */}

                        <Text className="text-[14px] leading-4" >
                            {results.length} {results.length === 1 ? 'resultado' : 'resultados'}
                        </Text>
                    </div>
                </div>

                <div className="flex mt-10">
                    <FilterSidebar
                        filters={filters}
                        onFiltersChange={setFilters}
                        onSearch={handleSearch}
                        onClear={handleClear}
                    />
                    <div className="flex-1 flex flex-col">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-6 pb-6">
                            {
                                results.map((profile) => (
                                    <ProfileCard profileData={profile} key={profile.id} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}