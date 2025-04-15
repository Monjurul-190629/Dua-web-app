import React, { useRef } from 'react';
import Image from 'next/image';
import img from '../../../public/mosque.jpeg';
import { PiFrameCornersLight } from "react-icons/pi";
import { FaRegBookmark } from "react-icons/fa";
import { IoBulbOutline } from "react-icons/io5";
import { MdShare } from "react-icons/md";
import { MdOutlineReport } from "react-icons/md";
import { FaCirclePlay } from "react-icons/fa6";

const DuaCard = ({ dua }) => {

    const { dua_name_en, id, top_en, dua_arabic, refference_en, audio } = dua;

    const audioRef = useRef(null);

    const handlePlay = () => {
        if (audioRef.current) {
            audioRef.current.play();
        }
    };

    console.log(audio)




    return (
        <div>
            <div className='font-semibold mb-4 flex gap-3 items-center'>
                <Image className='w-12 h-12' src={img} alt="mosque.img" />
                <div className='text-[#1FA45B]'>
                    {id} {dua_name_en}
                </div>
            </div>
            <div className='mt-7'>
                <p className='mb-7'>{top_en}</p>
                <p className='mb-7 font-bold text-[28px]'>{dua_arabic}</p>
            </div>
            <div className='font-semibold'>
                <p className=' text-[#1FA45B]'>Reference: </p>
                <p className=''>{refference_en}</p>
            </div>
            <div className='mt-7 mb-20 flex justify-between'>
                <div>
                    {
                        audio == null ? '' : (
                            <div>
                                <div className='cursor-pointer'>
                                    <FaCirclePlay className='w-12 h-12 text-green-600' />
                                </div>
                                {/* Audio Element */}
                                <audio ref={audioRef} src={audio} preload="auto" />
                            </div>
                        )
                    }
                </div>
                <div className='flex gap-6 items-center text-slate-500'>
                    <PiFrameCornersLight className='w-10 h-10' />
                    <FaRegBookmark className='w-7 h-7' />
                    <IoBulbOutline className='w-7 h-7' />
                    <MdShare className='w-7 h-7' />
                    <MdOutlineReport className='w-10 h-10' />
                </div>
            </div>
        </div>
    );
};

export default DuaCard;