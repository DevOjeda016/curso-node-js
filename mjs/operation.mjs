export function sum (a, b) {
    return a + b;
}

export function sub (a, b) {
    return a - b;
}

export function mul (a, b) {
    return a * b;
}

export function div (a, b) {
    if ((a / b) === 'Infinity') {
        return a / b; 
    } else {
        return 'No se puede dividir entre 0';
    }
}