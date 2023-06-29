
const getSum = (someNumber) => {
    console.log (`First Number:`, someNumber)
    
    return function (anotherNumber) {
        console.log (`Second Number:`, anotherNumber);
        console.log (`Sum:`, someNumber+anotherNumber)
    }
}

const resultFunc = getSum(3);
resultFunc(2)