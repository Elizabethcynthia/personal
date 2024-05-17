let btn = document.getElementById("btn");
let names = document.getElementById('myName');
console.log(names);
console.log(btn);
btn.addEventListener('click',(e) => {
e.preventDefault();
alert(`hey, ${names.value} thanks for dropping by.`)
}) 

let x = document.getElementById("btn");
let name = document.getElementById("myService");
console.log(name);
console.log(x);
x.addEventListener('click',(e) => {
    e.preventDefault();
    alert(`your, ${name.value} is my command.`)
})