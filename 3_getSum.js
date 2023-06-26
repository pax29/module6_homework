let Number1;
let Number2;
let Number3;


const getSumOfTwoNumbers = (externalFunc) => {
    externalFunc();

    return function() {
        Number2 = 5;
        console.log (`got Second Number: ${Number2}`);
        Number3 = Number1+Number2;
        console.log (`got Sum: ${Number3}`)
    }

}

const getNumber1 = () => {
    Number1 = 3;
    console.log (`got First Number: ${Number1}`)
}

const resultFunc = getSumOfTwoNumbers(getNumber1);

resultFunc ()