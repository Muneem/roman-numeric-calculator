import {numbersToRoman} from "../numbers-to-roman";

describe('NumbersToRoman', () => {
    it('should convert number to romans', () => {
        expect(numbersToRoman(1)).toBe('I');
    });

    it('should convet numbers to roman between 1 and 1000 inclusive', () => {
        expect(numbersToRoman(0)).toBe('Enter a number between 1 and 1000');
        expect(numbersToRoman(10000)).toBe('Enter a number between 1 and 1000');
    })

});
