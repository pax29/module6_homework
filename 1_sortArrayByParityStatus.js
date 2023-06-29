let arr=[2,6,34,2,null,6,9,"mamma-mia",11,22,"Luigi"];
let quantityodd=0;
let quantityeven=0;
let quantitynull=0;
let quantitynotnumber=0;

const sortArrayByParityStatus = (array) => {
    for (let i=0; i<arr.length; i++){
        if (typeof(arr[i]) == 'number') {
            if (arr[i] % 2 == 0) {
                quantityeven++
            } else {
                quantityodd++
            }
        } else if ((arr[i]) == null) {
        quantitynull++
        } else {
            quantitynotnumber++
        }
    }
console.log(`${quantityeven} чётных, ${quantityodd} нечётных, ${quantitynull} нулевых, ${quantitynotnumber} не являются числом`)
}

sortArrayByParityStatus(arr);