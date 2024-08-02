function getSpecialCharacter() {
    let number = prompt("Введіть число від 0 до 9:");
    
    number = Number(number); 

    let specialCharacter;

    if (number === 0) {
        specialCharacter = ')';
    } else if (number === 1) {
        specialCharacter = '!';
    } else if (number === 2) {
        specialCharacter = '@';
    } else if (number === 3) {
        specialCharacter = '#';
    } else if (number === 4) {
        specialCharacter = '$';
    } else if (number === 5) {
        specialCharacter = '%';
    } else if (number === 6) {
        specialCharacter = '^';
    } else if (number === 7) {
        specialCharacter = '&';
    } else if (number === 8) {
        specialCharacter = '*';
    } else if (number === 9) {
        specialCharacter = '(';
    } else {
        alert("Введено некоректне число. Будь ласка, введіть число від 0 до 9.");
        return;
    }

    alert("Спецсимвол для " + number + " це " + specialCharacter);
}