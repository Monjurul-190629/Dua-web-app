'use client';

import { useEffect, useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import getCategory from './lib/getCategory';
import getSubcateByCate from './lib/getSubcateByCate';
import Image from 'next/image';
import img from '../../public/category_icon.png';
import getDuaCard from './lib/getDuaCard';
import DuaCard from './Component/DuaCard';

export default function Home() {
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);


  /// For duas
  const [duas, setDuas] = useState([]);

  // for visualization

  const [duaId, setDuaId] = useState(null);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  // Fetch categories when component mounts
  useEffect(() => {
    const fetchData = async () => {
      const data = await getCategory();
      setCategories(data);
    };
    fetchData();
  }, []);

  // Handle subcategory fetch
  const handleSubcategories = async (id) => {
    if (selectedCategoryId === id) {
      // Collapse if same ID clicked again
      setSelectedCategoryId(null);
      setSubcategories([]);
      return;
    }

    const subs = await getSubcateByCate(id);
    setSubcategories(subs);
    setSelectedCategoryId(id);
  };


  // Handle Dua Cards

  const handleDuaCards = async (id) => {
    // collapse if same id clicked again
    if (duaId == id) {
      return;
    }
    const duas = await getDuaCard(id);
    setDuas(duas);
    setDuaId(id);
  }

  return (
    <div className="flex justify-center  gap-14 mt-20">
      <div className="w-[350px]"> 
        <div className="bg-[#1FA45B] text-white text-center py-4 px-6 font-semibold rounded-t-[10px]">
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

        <ul>
          {categories.map((category) => (
            <li key={category.id} className='mb-4'>
              <div
                className="flex gap-5 justify-between cursor-pointer items-center bg-slate-200 rounded-lg"
                onClick={() => handleSubcategories(category.cat_id)}
              >
                <div className="flex gap-6 mb-4 items-center pt-3 pl-2">
                  <Image className="w-10 h-10" src={img} alt="Category icon" />
                  <div>
                    <p className="text-[#1FA45B] font-semibold">
                      {category.cat_name_en}
                    </p>
                    <p className="font-semibold text-[#7E7E7E]">
                      Subcategory: {category.no_of_subcat}
                    </p>
                  </div>
                </div>
                <div className='pr-2'>
                  <p className="font-semibold text-center">{category.no_of_dua}</p>
                  <p className="font-semibold text-[#7E7E7E]">Duas</p>
                </div>
              </div>

              {/* Show subcategories if selected */}
              {selectedCategoryId === category.cat_id && (
                <div className="mb-8">
                  {subcategories.length === 0 ? (
                    <p className="text-gray-500 italic">No subcategories found.</p>
                  ) : (
                    <ul className="list-disc list-inside marker:text-green-700">
                      {subcategories.map((subcategory) => (
                        <li
                          key={subcategory.id}
                          className="py-3 text-[16px] font-semibold text-[#373737] break-words"
                        >
                          <div className={`inline cursor-pointer transition-colors duration-200 ${duaId === subcategory.subcat_id ? 'text-[#1FA45B]' : 'text-black'
                            }`} onClick={() => handleDuaCards(subcategory.subcat_id)}>
                            {subcategory.subcat_name_en}
                          </div>

                        </li>

                      ))}
                    </ul>
                  )}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div>
        {/* Dua Cards */}

        <ul>
          {
            duas.map(d => (
              <DuaCard key = {d.id} dua = {d}></DuaCard>
            ))
          }
        </ul>
      </div>
    </div>
  );
}
