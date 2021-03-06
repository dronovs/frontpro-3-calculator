function calculator () {
    const LIST_OF_OPERATORS = ["+", "-", "*", "/"];
    const MIN_AMOUNT_OF_OPERANDS = 2;
    const MAX_AMOUNT_OF_OPERANDS = 5;

    let totalAmountOfOperands = 0;
    let operator = null;
    let usersNumbers = [];
    let resultMessage = "";
    let result = 0;

    function askUser(message) {
        return prompt(message);
    }

    function checkTotalAmountOfNumbers(totalAmount, minValue, maxValue) {
        totalAmountOfOperands = +askUser(`Enter amount of operands between ${minValue} and ${maxValue}`);
        while (totalAmountOfOperands < minValue || totalAmountOfOperands > maxValue) {
            totalAmountOfOperands = +askUser(`Enter amount of operands between ${minValue} and ${maxValue}`);
        }
        console.log(totalAmountOfOperands)
        return totalAmountOfOperands;
    }
    function checkOperator(availableOperators) {
        while (!LIST_OF_OPERATORS.includes(operator)) {
            operator = askUser('Choose one of operations: +, -, /, *');
            console.log(operator);
        }

        return operator;
    }

    function getUserNumbers(totalAmountOfOperands){
        let usersOperand = 0;
        for (let i = 0; i < totalAmountOfOperands; i++) {
            usersOperand = +askUser('Enter your operand!')
            while(isNaN(usersOperand)){
                usersOperand = +askUser('Enter a NUMBER please!');
            }
            usersNumbers.push(usersOperand);
            console.log(usersOperand);
        }
        console.log(usersNumbers);
        return usersNumbers;
    }

    function calcResult(operands, operator, usersNumbers) {
        result = usersNumbers.reduce((sum, current) => {
            switch (operator) {
                case '+':
                    return (sum += current);
                case '-':
                    return (sum -= current);
                case '*':
                    return (sum *= current);
                case '/':
                    return (sum /= current);
            }
        })
        console.log(result);
        return result;
    }

    function showResult(result, resultMessage) {
        resultMessage = `Calculation finished with result: ${result}`;
        alert(resultMessage);
    }

    checkTotalAmountOfNumbers(totalAmountOfOperands, MIN_AMOUNT_OF_OPERANDS, MAX_AMOUNT_OF_OPERANDS);

    checkOperator(LIST_OF_OPERATORS);

    getUserNumbers(totalAmountOfOperands);

    calcResult(totalAmountOfOperands, operator, usersNumbers )

    showResult(result, resultMessage)
}
calculator();