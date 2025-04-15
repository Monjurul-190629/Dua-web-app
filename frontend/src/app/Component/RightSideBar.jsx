import React from 'react';
import { FaUserCircle } from "react-icons/fa";
import { IoLanguageSharp } from "react-icons/io5";
import { MdFontDownloadOff } from "react-icons/md";
import { SiGeneralmotors } from "react-icons/si";
import { IoToggleOutline } from "react-icons/io5";

const RightSideBar = () => {
  return (
    <div className="p-4 md:p-6 bg-white rounded-lg shadow-lg">
      {/* User Icon */}
      <div className="flex justify-center my-8">
        <FaUserCircle className="text-gray-600 text-5xl" />
      </div>

      {/* Settings */}
      <div className="space-y-6 mt-20">
        <div className='text-gray-600 font-bold text-2xl text-center'>
            Setting
        </div>
        {/* Language Settings */}
        <div className="flex items-center gap-3 text-gray-600 hover:text-[#1FA45B] transition-colors">
          <IoLanguageSharp className="text-xl" />
          <p className="text-sm md:text-base font-semibold">Language Settings</p>
        </div>

        {/* General Settings */}
        <div className="flex items-center gap-3 text-gray-600 hover:text-[#1FA45B] transition-colors">
          <SiGeneralmotors className="text-xl" />
          <p className="text-sm md:text-base font-semibold">General Settings</p>
        </div>

        {/* Font Settings */}
        <div className="flex items-center gap-3 text-gray-600 hover:text-[#1FA45B] transition-colors">
          <MdFontDownloadOff className="text-xl" />
          <p className="text-sm md:text-base font-semibold">Font Settings</p>
        </div>

        {/* Appearance Settings */}
        <div className="flex items-center gap-3 text-[#1FA45B] hover:text-[#1FA45B] transition-colors">
          <MdFontDownloadOff className="text-xl" />
          <p className="text-sm md:text-base font-semibold">Appearance Settings</p>
        </div>

        {/* Night Mode */}
        <div className="flex items-center gap-3 text-gray-600 hover:text-[#1FA45B] transition-colors">
          <p className="text-sm md:text-base font-semibold">Night Mode</p>
          <IoToggleOutline className="h-7 w-7 text-gray-500" />
        </div>
      </div>
    </div>
  );
};

export default RightSideBar;
