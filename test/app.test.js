const { calculateExpression } = require('../app');

test('adds 1 + 2 to equal 3', () => {
    expect(calculateExpression('1+2')).toBe(3);
});
