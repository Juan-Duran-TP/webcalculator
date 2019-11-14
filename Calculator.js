class Calculator {
    constructor(value) {
        if (typeof value === 'undefined') {
            this.value = 0;
        }
        else {
            this.value = value;
        }
    }

    equals(){
        return this.value;
    }

    add(value){
        this.value += value;
        return this;
    }

    subtract(value){
        this.value -= value;
        return this;
    }

    divide(value){
        this.value /= value;
        return this;
    }

    multiply(value){
        this.value *= value;
        return this;
    }

    clear(){
        this.value = 0;
        return this;
    }

    rpn(expression){
        if (typeof expression === 'undefined'){
            this.value = 0;
        }
        else {
            this.clear();
            let firstValue = "";
            let secondValue = "";
            let firstIncomplete = true;
            let secondIncomplete = true;
            let operator = "";
            let position = 0;
            while(position < expression.length){
                for(let i = position; i < expression.length; i++) {
                    let char = expression[i];
                    if (char === " "  && !firstIncomplete && secondIncomplete){
                        secondIncomplete = false;
                    }
                    if (char === " " && firstIncomplete){
                        firstIncomplete = false;
                    }
                    if(firstIncomplete){
                        firstValue += char;
                    }
                    else if(secondIncomplete){
                        secondValue += char;
                    }
                    else {
                        operator += char;
                    }
                    position = i;
                    if (operator.length === 2){
                        break;
                    }
                }
                position+= 2;
                switch (operator){
                    case " +":
                        this.value = parseInt(firstValue,10) + parseInt(secondValue,10);
                        break;
                    case " -":
                        this.value = parseInt(firstValue,10) - parseInt(secondValue,10);
                        break;
                    case " *":
                        this.value = parseInt(firstValue,10) * parseInt(secondValue,10);
                        break;
                    case " /":
                        this.value = parseInt(firstValue,10) / parseInt(secondValue,10);
                        break;
                    default:
                        return this;
                }
                firstValue = this.value;
                secondValue = "";
                secondIncomplete = true;
                operator = ""
            }
        }
        return this;
    }
}
module.exports = Calculator;