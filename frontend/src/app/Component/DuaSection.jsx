import React from 'react';

const DuaSection = ({subname}) => {
    return (
        <div>
            <div className='font-semibold mb-4'>
                <span className='text-[#1FA45B] pr-2'>Section: </span> {subname}
            </div>
        </div>
    );
};

export default DuaSection;