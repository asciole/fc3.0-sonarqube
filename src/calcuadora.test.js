const soma = require('./calculadora');

test('Adicionando 1 + 2', () => {
  expect(soma(1, 2)).toBe(4);
});
