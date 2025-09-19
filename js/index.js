// get the parent element
const categoriesContainer = document.getElementById('navber');

//categories data loaded
const categoriesData =()=>{
    const url = fetch('https://news-api-fs.vercel.app/api/categories');
    url.then(res => res.json())
        .then(data => displayCategories(data))
}

const displayCategories = (data)=>{
    console.log(data.categories);
    const categories = data.categories;
    categories.forEach(cetegory => {
        categoriesContainer.innerHTML += `
        <li class='hover:border-b-2 border-red-500 cursor-pointer'>${cetegory.title}<li/>
        
        `;
    });
    
}


categoriesData();
