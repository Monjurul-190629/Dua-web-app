import React from 'react';

const DuaCard = ({dua}) => {
    
    const {dua_name_en} = dua;



    return (
        <div>
            {dua_name_en}
        </div>
    );
};

export default DuaCard;