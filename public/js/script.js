const allElement = document.getElementById("allElement");
const allElementSearch = document.getElementById("allElementSearch");

const baseUrl = `http://localhost:5000/books`;

window.addEventListener('onload', getAllBook());

async function getAllBook(){
    const res = await fetch(baseUrl, {method: 'GET'});
    const data = await res.json();

    for(let i = 0; i < data.length; i++){
        let title = data[i].title;
        let author = data[i].author;
        let img = data[i].cover_img;
        let description = data[i].description;
        let genre = data[i].genre;
        let publication_date = data[i].publication_date.replaceAll('-', '/').split('').splice(0, 10).join('');
        let available = data[i].available;
        
        allElement.innerHTML += `
            <div class="col my-3 p-3">
                <div class="card mb-3 w-100 h-100">
                    <div class="row g-0">
                        <div class="col-md-4">
                        <img src="${img}" class="img-fluid rounded-start" alt="image de couverture">
                        </div>
                        <div class="col-md-8">
                        <div class="card-body mb-2">
                            <h5 class="card-title">${title}</h5>
                            <div class="d-flex justify-content-between">
                                <p>Genre : ${genre}</p>
                                <p class="card-text text-dark">Auteur : ${author}</p>
                            </div>
                            <p class="card-text">${description}</p>
                        </div>
                        </div>
                        <div class="card-footer d-flex justify-content-between mt-4 h-25">
                            <P>Disponibilité : ${available}</P>
                            <p>Date de Publication : ${publication_date}</p>
                        </div>
                    </div>
                </div>
            </div>`;
    }

    return allElement;
}

// const baseUrlSearch = `http://localhost:5000/bookSearch/`;
// const searchBtn = document.getElementById("get");
// const inputSearch = document.getElementById("inputSearch");

// getBtn.addEventListener('click', getSearch());

// async function getSearch(){
//     const res = await fetch(baseUrlSearch + inputSearch.value, {method: 'GET'});
//     const data = await res.json();

//     allElement.innerHTML = '';

//     for(let i = 0; i < data.length; i++){
//         let title = data[i].title;
//         let author = data[i].author;
//         let img = data[i].cover_img;
//         let description = data[i].description;
//         let genre = data[i].genre;
//         let publication_date = data[i].publication_date.replaceAll('-', '/').split('').splice(0, 10).join('');
//         let available = data[i].available;
        
//         allElementSearch.innerHTML += `
//             <div class="col my-3">
//                 <div class="card">
//                     <img src="${img}" class="card-img-top" alt="cover image">
//                     <div class="card-body h-50">
//                         <h5 class="card-title">${title}</h5>
//                         <div class="d-flex justify-content-between">
//                             <p>Genre : ${genre}</p>
//                             <p class="card-text text-dark">Author : ${author}</p>
//                         </div>
//                         <p class="card-text">${description}</p>
//                     </div>
//                     <div class="card-footer d-flex justify-content-between">
//                         <P>Available : ${available}</P>
//                         <p>${publication_date}</p>
//                     </div>
//                 </div>
//             </div>`;
//     }

//     return allElementSearch;
// }