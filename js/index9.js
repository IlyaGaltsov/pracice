let number = parseInt(prompt('Enter your number'))
document.write(`Дільники числа ${number}: `);

for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
        document.write(i + ', ');
    }
}