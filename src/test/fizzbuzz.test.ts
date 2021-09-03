import {FizzBuzz} from "../main/fizzbuzz";

describe('FizzBuzz test', () => {
    it("should only accept numbers 1 to 100", () => {
        let fizzbuzz: FizzBuzz = new FizzBuzz();
        expect(fizzbuzz.run(1)).toBe("1");
        expect(fizzbuzz.run(101)).toBe(false);
    });

    it("it should return fizz if the number is a multiple of 3 and not a multiple of 3 and 5", () => {
        let fizzbuzz: FizzBuzz = new FizzBuzz();
        expect(fizzbuzz.run(3)).toBe("Fizz");
        expect(fizzbuzz.run(12)).toBe("Fizz");
        expect(fizzbuzz.run(15)).not.toBe("Fizz");
    });

    it("it should return buzz if the number is a multiple of 5 and not a multiple of 3 and 5", () => {
        let fizzbuzz: FizzBuzz = new FizzBuzz();
        expect(fizzbuzz.run(5)).toBe("Buzz");
        expect(fizzbuzz.run(25)).toBe("Buzz");
        expect(fizzbuzz.run(15)).not.toBe("Buzz");
    });

    it("it should return FizzBuzz if the number is a multiple of 3 and 5", () => {
        let fizzbuzz: FizzBuzz = new FizzBuzz();
        expect(fizzbuzz.run(15)).toBe("FizzBuzz");
        expect(fizzbuzz.run(30)).toBe("FizzBuzz");
        expect(fizzbuzz.run(3)).not.toBe("FizzBuzz");
        expect(fizzbuzz.run(5)).not.toBe("FizzBuzz");
    });

});