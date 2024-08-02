function findDivisors() {
   
    let number = prompt("Введіть число:");
    
    number = Number(number);
   
    if (isNaN(number) || number <= 0) {
        alert("Будь ласка, введіть дійсне позитивне число.");
        return;
    }

    // Ініціалізуємо змінну для зберігання дільників
    let divisors = "";

    // Знаходимо дільники числа
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            divisors += i + " "; // Додаємо дільник до списку
        }
        
    alert("Дільники числа " + number + ": " + divisors.trim());
    return;
}
}