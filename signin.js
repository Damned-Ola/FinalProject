const form = document.querySelector('form');
const uri = 'http://localhost:3000/users';
let email = form.email;
let password = form.password;
let emailValue="";
let passwordValue="";
function emailChange(){
    let em=email.value
    return emailValue=em;
}
function passwordChange(){
    let ps=password.value
    return passwordValue=ps;
}
const userCheck = async()=>{
    let urii = uri + `?email=${emailValue}&password=${passwordValue}`;
    const res = await fetch(urii);
    const user = await res.json();
    if (user[0]!==undefined){
        let userId=user[0].id;
        window.location.replace('./home.html');
        localStorage.setItem('userId', userId);
    }else{
        alert('Wrong password or email');
    }
}
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    userCheck();
});