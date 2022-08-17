
function add(a, b) {
    let sum = a + b;
    return sum;
}

function sub(a, b) {
    let sub = a - b;
    return sub;
}

function divide(a, b) {
    let divide = a / b;
    divide = divide.toFixed(2);
    return divide;
}

function mul(a, b) {
    let mul = a * b;
    return mul;
}

export default add;
export {sub, divide, mul};