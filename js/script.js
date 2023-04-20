const OPERATIONS = {
    sum: '+',
    subtraction: '-',
    division: '/',
    multiply: '*',
}

function calculate ( {a, b, operation} ) {
    let result = 0;

    switch (operation) {
        case OPERATIONS.sum:
            return sum(a, b)
            break;
        case OPERATIONS.subtraction:
            return subtraction(a, b)
            break;
        case OPERATIONS.division:
            return division(a, b)
            break;
        case OPERATIONS.multiply:
            return multiply(a, b)
            break;
    
        default:
            break;
    }

    return result
}