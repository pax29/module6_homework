
let i=0

const subtract = (Number1, Number2) => {
    console.log(Number1+i);
    i++;
    if (Number1+i>Number2) {
        clearInterval(printOutInterval);
    }
}

const printOutInterval = setInterval (subtract,1000, 5, 15)
