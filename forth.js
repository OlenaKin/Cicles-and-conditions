function calculateGCD() {
    
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;

    
    num1 = parseInt(num1);
    num2 = parseInt(num2);

    
    while (num2 !== 0) {
        let temp = num2;
        num2 = num1 % num2;
        num1 = temp;
    }

    alert("Найбільший спільний дільник чисел дорівнює " + num1);
}