import { expect, test } from 'vitest';
import { sum, addArray } from '../../src/helpers/sum';
import { describe } from 'vitest';

describe('sum function', () =>{
    test('adds 1 + 2 to equal 3', () => {
        //Preparecion
        const a = 1;
        const b = 2;
      
        //Estimulo
        const result = sum(a, b);
      
        //El comportamiento esperado
        expect(result).toBe(a + b);
      
        //   expect(sum(1,2)).toBe(3);
      });
})

describe('addArray Function', () =>{
    test('should return 0 if the array is empty',() =>{
        const numberArray = [];
    
        const result = addArray(numberArray);
    
        expect(result).toBe(0);
    });
    
    
    test('should return the proper valur of the addArray function',() =>{
        const numberArray = [1,2,3,4,5];
    
        const result = addArray(numberArray);
    
        expect(result).toBe(15);
    });
})