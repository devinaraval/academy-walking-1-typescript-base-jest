export class FizzBuzz {
    run(int:number) {
        if (int < 1 || int > 100) {
            return false;
        }

        if (int % 3 === 0 && int % 5 !== 0) {
            return "Fizz";
        }

        if (int % 5 === 0 && int % 3 !== 0) {
            return "Buzz";
        }

        if (int % 5 === 0 && int % 3 === 0) {
            return "FizzBuzz";
        }

        return int.toString();
    }
}
