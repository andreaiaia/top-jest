const capitalize = require('../capitalize');

test('Capitalize', () => {
    expect(capitalize('foppapedretti inc.')).toBe('Foppapedretti inc.');
});
