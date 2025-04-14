import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import getCategory from './lib/getCategory';
import Image from 'next/image'
import img from '../../public/category_icon.png';


export default async function Home() {

  const categories = await getCategory();

  console.log(categories)


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

        {/* categories */}

        <ul>
          {
            categories.map(category => (
              <li key={category.id}>
                <div className='flex gap-5 justify-between'>

                  <div className='flex gap-6 mb-8'>
                    <div>
                      <Image
                        className="w-10 h-10"
                        src={img}
                        alt="Category icon"

                      />

                    </div>
                    <div>
                      <p className=' text-[#1FA45B] font-semibold'>{category.cat_name_en}</p>
                      <p className='font-semibold text-[#7E7E7E]'> Subcategory: {category.no_of_subcat} </p>
                    </div>

                  </div>
                  <div>
                    <p className='font-semibold'> {category.no_of_dua} </p>
                    <p className='font-semibold text-[#7E7E7E]'>Duas</p>
                  </div>
                </div>
              </li>
            ))
          }
        </ul>





      </div>
      <div></div>
    </div>
  );
}
