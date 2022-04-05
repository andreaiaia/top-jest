const reverse = require('../reverse');

test('Reverse string', () => {
    expect(reverse('abc')).toBe('cba');
});