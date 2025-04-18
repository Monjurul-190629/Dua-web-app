import React, { useRef } from 'react';
import Image from 'next/image';
import img from '../../../public/mosque.jpeg';
import { PiFrameCornersLight } from "react-icons/pi";
import { FaRegBookmark } from "react-icons/fa";
import { IoBulbOutline } from "react-icons/io5";
import { MdShare, MdOutlineReport } from "react-icons/md";
import { FaCirclePlay } from "react-icons/fa6";

const DuaCard = ({ dua, index }) => {
    const { dua_name_en, top_en, dua_arabic, refference_en, audio, transliteration_en, translation_en } = dua;


    const audioRef = useRef(null);

    const handlePlay = () => {
        if (audioRef.current) {
            audioRef.current.play().catch(err => {
                console.warn("Audio failed to play:", err);
            });
        }
    };

    return (
        <div className="max-w-xl w-full bg-white shadow-md p-5 rounded-2xl p-2 mx-auto my-3 transition-all duration-300 hover:shadow-lg">

            {/* Header */}
            <div className="font-semibold mb-4 flex gap-4 items-center">
                <Image className="w-12 h-12 object-cover rounded-full" src={img} alt="mosque.img" />
                <div className="text-[#1FA45B] text-base sm:text-lg md:text-xl">
                    {index}. {dua_name_en}
                </div>
            </div>

            {/* Top Description */}
            <div className="mt-4">
                <p className="mb-5 text-sm sm:text-base">{top_en}</p>
                <p className="mb-5 font-bold text-xl sm:text-3xl text-right leading-relaxed p-5">{dua_arabic}</p>
                {
                    transliteration_en ? <>
                    <p className='text-justify mb-4'><span className='font-semibold'>Transliteration: </span> <span className='italic'>{transliteration_en}</span></p>
                    </> : ''
                }
                {
                    translation_en ? <>
                    <p><span className='font-semibold'>Translation: </span> {translation_en}</p>
                    </> : ''
                }
            </div>

            {/* Reference */}
            <div className="font-semibold mt-4">
                <p className="text-[#1FA45B] text-sm">Reference:</p>
                <p className="text-gray-700 text-sm sm:text-base">{refference_en}</p>
            </div>

            {/* Bottom Icons */}
            <div className="mt-6 flex justify-between items-center">
                {/* Audio */}
                {
                    audio && (
                        <div className="cursor-pointer" onClick={handlePlay}>
                            <FaCirclePlay className="w-12 h-12 text-green-600" />
                            <audio ref={audioRef} src={audio} preload="auto" />
                        </div>
                    )
                }

                {/* Icons */}
                <div className="flex gap-5 items-center text-slate-500">
                    <PiFrameCornersLight className="w-7 h-7 sm:w-6 sm:h-6" />
                    <FaRegBookmark className="w-6 h-6 sm:w-6 sm:h-6" />
                    <IoBulbOutline className="w-6 h-6 sm:w-6 sm:h-6" />
                    <MdShare className="w-6 h-6 sm:w-6 sm:h-6" />
                    <MdOutlineReport className="w-7 h-7 sm:w-7 sm:h-7" />
                </div>
            </div>
        </div>
    );
};

export default DuaCard;
