let userPromptX;
let userPromptN;

userPromptX=Number(prompt('Введите число X'));
userPromptN=Number(prompt('Введите число N'));

const getXtothepowerofN = () => {
    console.log (Math.pow(userPromptX, userPromptN));
}

getXtothepowerofN ()