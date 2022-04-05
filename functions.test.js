const capitalize = require('./functions');

test('Capitalize', () => {
    expect(capitalize('foppapedretti inc.')).toBe('Foppapedretti inc.');
});