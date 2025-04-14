import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <div className="flex justify-center mt-20 ">
      <div className="">
        <div className="bg-[#1FA45B] text-white py-4 px-30 font-semibold rounded-t-[10px]">
          Categories
        </div>
        <div className="relative w-full my-4">
          <MagnifyingGlassIcon className="h-5 w-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
          <input
            type="search"
            placeholder="Search by Categories"
            className="w-full pl-10 pr-4 py-3 border border-[#bdc5c1] rounded-[8px] outline-none focus:ring-2 placeholder:pl-1"
          />
        </div>
      </div>
      <div></div>
    </div>
  );
}
