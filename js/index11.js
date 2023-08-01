const number = parseInt(prompt('Enter number'))
let sum = 0;
for (let i = 1; i <= number; i++) {
    if (number % i === 0 && i % 2 === 0) {
        sum += i;
    }
}
console.log(`Sum of even divisors of ${number} is: ${sum}`);