const caesar = require('../caesar');

test('First string', () => {
    expect(caesar('Caio', 3)).toBe('Fdlr');
});

test('Second string', () => {
    expect(caesar('Zampa', 3)).toBe('Cdpsd');
});

test('Third string', () => {
    expect(caesar('Zampa, pagnotta', 3)).toBe('Cdpsd, sdjqrwwd');
});