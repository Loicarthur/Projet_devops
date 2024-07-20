const { calculateExpression } = require('./app');

test('calculates expression 1+2 to equal 3', () => {
    expect(calculateExpression('1+2')).toBe(3);
});

test('returns error for invalid expression', () => {
    expect(() => calculateExpression('1/0')).toThrow();
});
