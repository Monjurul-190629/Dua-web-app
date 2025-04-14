
const getCategory = async () => {

    const result = await fetch('https://dua-web-app-production.up.railway.app/categories', {
        
            next: { revalidate: 20 }, // Revalidate every 20 seconds
          
    });

    if(!result.ok){
        throw new Error('there was an fetching error to get category')
    }

    const categories = await result.json();

    return categories;
};

export default getCategory;