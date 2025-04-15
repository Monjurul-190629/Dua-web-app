
const getDuaCard = async (id) => {

    const result = await fetch(`https://dua-web-app-production.up.railway.app/duas/${id}`, {
        next: {
            revalidate : 10 // after 10s it will be revalidated
        }
    });


    if(!result.ok){
        throw new Error('There was an error for fetching duas');
    }

    const duas = result.json();

    return duas;

};

export default getDuaCard;