const calculator = require('../calculator');

test('Addiction', () => {
    expect(calculator.add(1, 1)).toBe(2);
});

test('Subtraction', () => {
    expect(calculator.sub(2, 1)).toBe(1);
});

test('Multiplication', () => {
    expect(calculator.mul(2, 2)).toBe(4);
});

test('Division', () => {
    expect(calculator.div(3, 2)).toBeCloseTo(1.5);
});