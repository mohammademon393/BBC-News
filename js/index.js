// get the parent element
const categoriesContainer = document.getElementById('navber');
// news-container
const newsContainer = document.getElementById('news-container');

// categories data loaded
const categoriesData = () => {
    fetch('https://news-api-fs.vercel.app/api/categories')
        .then(res => res.json())
        .then(data => displayCategories(data))
        .catch(err => console.error("Error loading categories:", err));
}


const displayCategories = (data) => {
    const categories = data.categories;

    // clear old data
    categoriesContainer.innerHTML = "";

    categories.forEach(category => {
        categoriesContainer.insertAdjacentHTML("beforeend", `
            <li id="${category.id}" 
                class="hover:border-b-4 border-red-500 cursor-pointer">
                ${category.title}
            </li>
        `);
    });

    // add click event only once (on parent - event delegation)
    categoriesContainer.addEventListener('click', (e) => {
        if (e.target.tagName === 'LI') {
            const allLi = categoriesContainer.querySelectorAll('li');
            allLi.forEach(li => li.classList.remove('border-b-4'));

            e.target.classList.add('border-b-4');
            // console.log("Selected category id:", e.target.id);
            newsCategories(e.target.id);
        }
    });
}


// category data loaded/{id}
const newsCategories = (newsId) => {

    fetch(`https://news-api-fs.vercel.app/api/categories/${newsId}`)
    .then(res => res.json())
        .then(data => displayNews(data.articles))
    .catch(err => {
        console.log(err);
        
    })
}

const displayNews = (articles)=>{
    console.log(articles);
    newsContainer.innerHTML ="";
    articles.forEach(article => {
        newsContainer.innerHTML += `
        <div>
            <div>
                <img src="${article.image.srcset[8].url}"/>
            </div>
            <h2>${article.title}</h2>
            <p>${article.time}</p>
        </div>
        `;
    })
    
}

categoriesData();
newsCategories('main');
