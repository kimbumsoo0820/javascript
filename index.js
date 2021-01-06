
const calculator = {

    plus: function (a, b) {
        return a + b;
    },

    min: function (a, b) {
        return a - b;
    }
}

const plus = calculator.plus(5, 5);

console.log(plus);

const min = calculator.min(10, 5);
console.log(min);