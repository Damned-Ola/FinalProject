const form = document.querySelector('form');
const gender = document.getElementById("genderId");
var selected = "null";
function onProjectChange() {
    const gender = document.getElementById("genderId");
    var selectedGender = gender.value;
    return selected = selectedGender;
  };
const createUser = async (e) => {
    e.preventDefault();
    const newUser = {
        name:form.name.value,
        gender:selected,
        email:form.email.value,
        password:form.password.value
    }
    await fetch('http://localhost:3000/users',{
        method:'POST',
        body: JSON.stringify(newUser),
        headers:{'Content-Type': 'application/json'}
    })
    window.location.replace('./index.html');
};

  form.addEventListener('submit', createUser);