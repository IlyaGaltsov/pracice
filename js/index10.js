const number = parseInt(prompt('Enter number'))
let count = 0;

for (let i = 1; i <= number; i++) {
    if (number % i === 0 && i % 2 === 0) {
        count++;
    }
}

document.write(count);