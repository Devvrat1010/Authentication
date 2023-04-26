const uname=document.getElementById("uname")
const email=document.getElementById("email")
const pass=document.getElementById("pass")
const btn=document.getElementById("btn")
const container=document.getElementById("container")

const write_data=(uname,email,pass)=>{
    fetch("http://localhost:5173/?uname="+uname+"&email="+email+"&pass="+pass)
    .then(res=>res.json())
    .then(res=>container.innerText=`${res.output.uname} ${res.output.email} ${res.output.pass}`)
};

btn.addEventListener('click',()=>{

    write_data(uname.value,email.value,pass.value)
}
)