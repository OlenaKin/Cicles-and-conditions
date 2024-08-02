function calculateSum() {
    //Input
     let start = prompt("Введіть початкове число діапазону:");
     let end = prompt("Введіть кінцеве число діапазону:");
 
     //Convert
     start = Number(start);
     end = Number(end);
 
     //What if a number is not a number?
     if (isNaN(start) || isNaN(end)) {
         alert("Будь ласка, введіть дійсні числа.");
         return;
     }
 
     // Chack if the numbers are in the correct order
     if (start > end) {
         alert("Початкове число повинно бути менше або дорівнювати кінцевому числу.");
         return;
     }
 
     // Initialise the variable
     let sum = 0;
 
     // Cicle for the calculation
     for (let i = start; i <= end; i++) {
         sum += i; // Додаємо поточне число до суми
     }
 
     // Result
     alert("Сума всіх чисел у діапазоні від " + start + " до " + end + " дорівнює " + sum);
 }