let display = document.getElementById('display');
let buttons = document.getElementById('myButton')


for (let button of buttons){
    button.addEventListener('click', () => {
        display.innerText += button.innerText;
    })
    }
// let equals = document.getElementById('equals')
//     equals.addEventListener('click',)

