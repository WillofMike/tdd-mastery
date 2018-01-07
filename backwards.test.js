const backwards = require('./backwards');

test('Reverse function exists', () => {
  expect(backwards).toBeDefined();
});

test('Reverse reverses a string', () => {
  expect(backwards('abcd')).toEqual('dcba');
});

test('Reverse reverses a string', () => {
  expect(backwards('  abcd')).toEqual('dcba  ');
});
