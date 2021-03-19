let userId = localStorage.getItem('userId');
const form = document.querySelector('form');
const container = document.querySelector('.favourites');
const setInfo =async()=>{
    let uri = `http://localhost:3000/users?id=${userId}`;
    const res = await fetch(uri);
    const user = await res.json();
    const favourites = user[0].favourites;
    console.log(favourites);
    let item = '';
    document.getElementById('inputName').value = user[0].name;
    document.getElementById('inputGender').value = user[0].gender;
    document.getElementById('inputEmail').value = user[0].email;
    favourites.forEach(favourite => {
        item +=
        ` <div class="col-md-4">
        <div class="card mb-4 box-shadow text-center">
          <img class="card-img-top " src="${favourite.img}">
          <div class="card-body bg-light">
            <p class="card-text">${favourite.title}</p>
            <p class="card-text">${favourite.brand}</p>
            <p class="card-text">${favourite.price}</p>
          </div>
        </div>
      </div>`;
      
    });
    container.innerHTML = item;
};
const changeUser = async (e) => {
    e.preventDefault();
    let uri = `http://localhost:3000/users?id=${userId}`;
    const res = await fetch(uri);
    const user = await res.json();
    const newUser = {
        name:form.name.value,
        gender:form.gender.value,
        email:form.email.value,
        password:user[0].password
    }
};

  form.addEventListener('submit', changeUser);

const logOut = () =>{
    localStorage.setItem('userId', null);
    window.location.replace('./index.html')
}

window.addEventListener('DOMContentLoaded',() => setInfo());