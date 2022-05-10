const {sum, myRemove} = require('./sum');

describe('Função sum:', () => {
it('Verifica se 4 + 5 é igual a 9', () => {
    expect(sum(4, 5)).toBe(9);
  });
  
  it('Verifica se 0 + 0 é igual a 0', () => {
    expect(sum(0, 0)).toBe(0);
  });  

  it('Verifica se 4 + "5" dá erro', () => {
    expect(() => sum(4, "5")).toThrow(Error);
  });  
})

describe('Função myRemove:', () => {
    it('Verifica se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toStrictEqual([1, 2, 4]);
    })

    it('Verifica se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
        expect(myRemove([1, 2, 3, 4], 3)).not.toStrictEqual([1, 2, 3, 4]);
    })

    it('Verifica se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
        expect(myRemove([1, 2, 3, 4], 5)).toStrictEqual([1, 2, 3, 4]);
    })
})