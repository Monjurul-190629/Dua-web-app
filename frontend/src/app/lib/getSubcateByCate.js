

const getSubcateByCate = async (id) => {

    const result = await fetch(`https://dua-web-app-production.up.railway.app/subcategories/${id}`, {
        next: {
            revalidate : 20 /// after 20s it will be revalidate
        }
    });

    if(!result.ok){
        throw new Error('there was an error to get subcategory');
    }

    const subcategories = await result.json();

    return subcategories;

};

export default getSubcateByCate;