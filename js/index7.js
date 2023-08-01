let sum = 0;
const lowerLimit = 30;
const upperLimit = 80;

for (let i = lowerLimit; i <= upperLimit; i++) {
    if (i % 2 === 0) {
        sum += i;
    }
}

console.log(sum);