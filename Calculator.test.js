
const Calculator = require('./Calculator.js')

describe('calculator', () => {
    test("if no initial value passed, value is assigned 0", () => {
        const subject = new Calculator();
        expect(subject.value).toBe(0);
    })

    test("Complete functionality cycle",() => {
        const subject = new Calculator(5);
        expect(subject.clear().add(3).subtract(1).multiply(6).divide(3).equals()).toBe(4);
    })

    describe("equals", () => {
        test("has a getter on 'register' called equals",() => {
            const subject = new Calculator(5);
            expect(subject.equals).toBeDefined();
        })
        test("has an initial value",() => {
            const subject = new Calculator(5);
            expect(subject.equals()).toBeDefined();
        })
        test("returns the current value",() => {
            const subject = new Calculator(5);
            expect(subject.equals()).toBe(5);
        })
    })

    describe('addition', () => {
        test("has an addition function",() => {
            const subject = new Calculator(5);
            expect(subject.add).toBeDefined();
        })
        test("addition can be chained",() => {
            const subject = new Calculator(5);
            expect(subject.add(0).add).toBeDefined();
        })
        test("addition adds correctly",() => {
            const subject = new Calculator(5);
            expect(subject.add(5).equals()).toBe(10);
        })
    })

    describe('subtraction', () => {
        test("has an subtraction function",() => {
            const subject = new Calculator(5);
            expect(subject.subtract).toBeDefined();
        })
        test("subtraction can be chained",() => {
            const subject = new Calculator(5);
            expect(subject.subtract(0).subtract).toBeDefined();
        })
        test("subtraction subtracts correctly",() => {
            const subject = new Calculator(5);
            expect(subject.subtract(5).equals()).toBe(0);
        })
    })

    describe('multiplication', () => {
        test("has an multiplication function",() => {
            const subject = new Calculator(5);
            expect(subject.multiply).toBeDefined();
        })
        test("multiplication can be chained",() => {
            const subject = new Calculator(5);
            expect(subject.multiply(0).multiply).toBeDefined();
        })
        test("multiplication multiplies correctly",() => {
            const subject = new Calculator(5);
            expect(subject.multiply(5).equals()).toBe(25);
        })
    })

    describe('division', () => {
        test("has an division function",() => {
            const subject = new Calculator(5);
            expect(subject.divide).toBeDefined();
        })
        test("division can be chained",() => {
            const subject = new Calculator(5);
            expect(subject.divide(0).divide).toBeDefined();
        })
        test("division divides correctly",() => {
            const subject = new Calculator(5);
            expect(subject.divide(5).equals()).toBe(1);
        })
    })

    describe('clear', () => {
        test("has an clear function",() => {
            const subject = new Calculator(5);
            expect(subject.clear).toBeDefined();
        })
        test("clear can be chained",() => {
            const subject = new Calculator(5);
            expect(subject.clear().clear).toBeDefined();
        })
        test("clear empties the register correctly",() => {
            const subject = new Calculator(5);
            expect(subject.clear().equals()).toBe(0);
        })
    })

    describe('reverse polish notation', () => {
        test("has an rpn function",() => {
            const subject = new Calculator(5);
            expect(subject.rpn).toBeDefined();
        })

        test("rpn changes register to 0 if nothing passed to rpn",() => {
            const subject = new Calculator(5);
            expect(subject.rpn()).toEqual({value: 0});
        })

        test("rpn can be chained",() => {
            const subject = new Calculator(5);
            expect(subject.rpn().rpn).toBeDefined();
        })
        test("rpn performs addition",() => {
            const subject = new Calculator(5);
            expect(subject.rpn('8 2 +')).toEqual({value: 10});
        })

        test("rpn performs subtraction",() => {
            const subject = new Calculator(5);
            expect(subject.rpn('8 2 -')).toEqual({value: 6});
        })
        
        test("rpn performs multiplication",() => {
            const subject = new Calculator(5);
            expect(subject.rpn('8 2 *')).toEqual({value: 16});
        })

        test("rpn performs division",() => {
            const subject = new Calculator(5);
            expect(subject.rpn('8 2 /')).toEqual({value: 4});
        })
        
        test("rpn recognizes negative values",() => {
            const subject = new Calculator(5);
            expect(subject.rpn('8 -2 /')).toEqual({value: -4});
        })        

        test("rpn performs larger expressions",() => {
            const subject = new Calculator(5);
            expect(subject.rpn('1 2 + 7 - 2 * 8 /')).toEqual({value: -1});
        })
    })

})