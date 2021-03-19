const container = document.querySelector('.headphones');
const container2 = document.querySelector('.keyboards');
const searchForm = document.querySelector('.search');
var button = document.createElement('button');
  button.innerHTML = 'Add to Favourite';
  button.classList='btn btn-sm btn-outline-secondary';

const renderItems = async (term) =>{
    let uri = 'http://localhost:3000/headphones';
    let uri2 = 'http://localhost:3000/keyboards';
    if (term){
        uri+= `?q=${term}`;
        uri2+= `?q=${term}`;
    }
    const res = await fetch(uri);
    const headphones = await res.json();
    let item = '';
    const res2 = await fetch(uri2);
    const keyboards = await res2.json();
    let item2 = '';
    headphones.forEach(headphone => {
        item +=
        ` <div class="col-md-4">
        <div class="card mb-4 box-shadow text-center">
          <img class="card-img-top " src="${headphone.img}">
          <div class="card-body bg-dark text-light">
            <p class="card-text">${headphone.title}</p>
            <p class="card-text">${headphone.brand}</p>
            <p class="card-text">${headphone.price}</p>
            <button type="button" class="btn btn-sm btn-outline-secondary">Add to Favourite</button>
          </div>
        </div>
      </div>`;
      
    });
    container.innerHTML = item;
    keyboards.forEach(keyboard => {
        item2 +=
        ` <div class="col-md-4">
        <div class="card mb-4 box-shadow text-center">
          <img class="card-img-top " src="${keyboard.img}">
          <div class="card-body bg-dark text-light">
            <p class="card-text">${keyboard.title}</p>
            <p class="card-text">${keyboard.brand}</p>
            <p class="card-text">${keyboard.price}</p>
            <button type="button" class="btn btn-sm btn-outline-secondary">Add to Favourite</button>
          </div>
        </div>
      </div>`
    });
    container2.innerHTML = item2;
};
searchForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    renderItems(searchForm.term.value.trim());
});

window.addEventListener('DOMContentLoaded',() => renderItems());