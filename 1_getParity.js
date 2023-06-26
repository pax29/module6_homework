let userPrompt;
let number;
let result;

const getParityStatus = () => {
    userPrompt = prompt('введите число (или 777 для выхода)');
    number = Number(userPrompt);

    if (Boolean(number) === false) {
        result = "ноль или не"
    } else { result = (number % 2 === 0) ? "чётное" : "нечётное"
    }

    alert(`${userPrompt} это ${result} число`);
}

do {
    getParityStatus();
} while (userPrompt != 777)
