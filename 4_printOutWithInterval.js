let userPrompt1;
let userPrompt2;
let i=0

userPrompt1=Number(prompt('Введите меньшее число'));

userPrompt2=Number(prompt('Введите большее число'));

console.log(`Первое число ${userPrompt1}, Второе число ${userPrompt2}, Разница ${userPrompt2-userPrompt1}`);

const subtract = () => {
    console.log(userPrompt1+i);
    i++;
    if (userPrompt1+i>userPrompt2) {
        clearInterval(printOutInterval)
    }
}

const printOutInterval = setInterval (subtract,1000)
