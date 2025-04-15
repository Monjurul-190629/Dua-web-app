import React from 'react';
import Image from 'next/image';
import img from '../../../public/unnamed.png';
import { FaHome } from "react-icons/fa";
import { MdSettingsInputComponent } from "react-icons/md";
import { FaRegBookmark } from "react-icons/fa";
import { IoBulbOutline } from "react-icons/io5";
import { RxIconjarLogo } from "react-icons/rx";
import { GoBook } from "react-icons/go";
import { FaRegComments } from "react-icons/fa";

const LeftSideBar = () => {
    return (
        <div>
            <div className='mt-12 p-5 mb-20'>
               <Image src = {img} alt = "" className='w-16 h-16'/>
            </div>
            <div className='ml-7 text-[26px] text-gray-500'>
            <FaHome className='mb-8'/>
            <MdSettingsInputComponent className='mb-8' />
            <FaRegBookmark className='mb-8' />
            <IoBulbOutline className='mb-8'/>
            <RxIconjarLogo className='mb-8' />
            <FaRegComments className='mb-8'/>
            <GoBook  className='mb-8'/>
            
            </div>
        </div>
    );
};

export default LeftSideBar;