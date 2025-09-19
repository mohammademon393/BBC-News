

//categories data loaded
const categoriesData =()=>{
    const url = fetch('https://news-api-fs.vercel.app/api/categories');
    url.then(res => res.json())
        .then(data => displayCategories(data))
}

const displayCategories = (category)=>{
    console.log(category);
    
}


categoriesData();
