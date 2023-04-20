const inputA = document.querySelector('.calc__input-a');
const inputB = document.querySelector('.calc__input-b');
const select = document.querySelector('.calc__select');
const button = document.querySelector('.calc__button');
const output = document.querySelector('.calc__output');


button.addEventListener('click', function() {
    let a = Number(inputA.value);
    let b = Number(inputB.value);
    let operation = select.value;

    let result = calculate({
        a,
        b,
        operation
    })

    output.innerHTML = `Result: ${result}`
    
})

