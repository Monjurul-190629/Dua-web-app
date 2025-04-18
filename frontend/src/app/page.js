'use client';

import { useEffect, useState } from 'react';
import getCategory from './lib/getCategory';
import getSubcateByCate from './lib/getSubcateByCate';
import Image from 'next/image';
import img from '../../public/category_icon.png';
import getDuaCard from './lib/getDuaCard';
import DuaCard from './Component/DuaCard';
import SectionHeader from './Component/SectionHeader';
import CateAndSer from './Component/CateAndSer';
import Loading from './Component/Loading';

export default function Home() {
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [duas, setDuas] = useState([]);
  const [duaId, setDuaId] = useState(null);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [subcatName, setSubcatName] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const [isLoading, setIsLoading] = useState(true);

  const [searchTerm, setSearchTerm] = useState(''); //// for search item

  // for initial dua
  const [initial, setInitial] = useState([]);

  // fetch initial Dua

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await fetch('https://dua-web-app-production.up.railway.app/duas/1', {
        next: {
          revalidate: 10 // revalidate after 10s
        }
      });
      const data = await result.json();
      setInitial(data);
      setIsLoading(false);
    }
    fetchData();
  }, [])


  console.log(initial);


  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const data = await getCategory();
      setCategories(data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const handleSubcategories = async (id) => {
    if (selectedCategoryId === id) {
      setSelectedCategoryId(null);
      setSubcategories([]);
      return;
    }

    setIsLoading(true);
    const subs = await getSubcateByCate(id);
    setSubcategories(subs);
    setSelectedCategoryId(id);
    setIsLoading(false);
  };

  const handleDuaCards = async (id, name) => {
    if (duaId === id) return;

    setSubcatName(name);
    setIsLoading(true);
    const duas = await getDuaCard(id);
    setDuas(duas);
    setDuaId(id);
    setIsLoading(false);
  };

  const currentDuas = duas.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  const totalPages = Math.ceil(duas.length / itemsPerPage);
  const pageNumbers = [...Array(totalPages)].map((_, index) => index + 1);

  const handlePageClick = (pageNumber) => setCurrentPage(pageNumber);

  // 🔍 Filtered categories based on search
  const filteredCategories = categories.filter((category) =>
    category.cat_name_en.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className='md:px-2 md:pt-5 pt-5'>
        <SectionHeader />
      </div>

      <div className="flex flex-col lg:flex-row justify-center gap-14 mt-4">

        {/* Left Section */}
        <div className="flex justify-center">
          <div className='w-[350px]'>

            {/*  Search Component */}
            <CateAndSer searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

            <ul>
              {isLoading ? (
                <Loading />
              ) : (
                filteredCategories.map((category) => (
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
                                <div
                                  className={`inline cursor-pointer transition-colors duration-200 ${duaId === subcategory.subcat_id
                                    ? 'text-[#1FA45B]'
                                    : 'text-black'
                                    }`}
                                  onClick={() =>
                                    handleDuaCards(subcategory.subcat_id, subcategory.subcat_name_en)
                                  }
                                >
                                  {subcategory.subcat_name_en}
                                </div>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    )}
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>

        {/* Right Section (Dua Cards) */}
        <div>
          <ul>
            {duas.length === 0 &&
              initial.map((d, index) => (
                <DuaCard
                  key={index}
                  dua={d}
                  index={index + 1}
                />
              ))
            }
          </ul>

          {duas.length > 0 && (
            <>
              <div className='font-semibold mb-4 flex justify-center md:text-[22px] max-w-xl'>
                <span className='text-[#1FA45B] pr-2'>Section:</span> {subcatName}
              </div>

              <ul>
                {currentDuas.map((d, index) => (
                  <DuaCard
                    key={index}
                    dua={d}
                    index={(currentPage - 1) * itemsPerPage + index + 1}
                  />
                ))}
              </ul>

              {/* Pagination */}
              <div className="flex justify-center mt-4">
                <div className="flex gap-2">
                  {pageNumbers.map((number) => (
                    <button
                      key={number}
                      className={`px-4 py-2 ${currentPage === number ? 'bg-green-500' : 'bg-gray-500'
                        } text-white rounded`}
                      onClick={() => handlePageClick(number)}
                    >
                      {number}
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
    
    
  );
}
