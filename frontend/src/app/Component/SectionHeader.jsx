import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const SectionHeader = () => {
    return (
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-0 mb-6 px-2 md:px-0">
            <div className="text-[#393939] text-xl md:text-2xl font-bold">
                Dua Page
            </div>

            <div className="relative w-full sm:w-[300px]">
                <input
                    type="search"
                    placeholder="Search by Dua Name"
                    className="w-full pr-10 pl-4 py-3 border border-[#bdc5c1] rounded-[8px] outline-none focus:ring-2 placeholder:pl-1 text-sm md:text-base"
                />
                <MagnifyingGlassIcon className="h-5 w-5 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
        </div>
    );
};

export default SectionHeader;
