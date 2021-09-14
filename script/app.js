// // // includes()  -> boolean
// // const arr = ["q", "w", "z", "x"];
// const users = [
//   {
//     name: "Ivan",
//     age: 15,
//   },
//   {
//     name: "Bob",
//     age: 25,
//   },
//   {
//     name: "Petya",
//     age: 111,
//   },
//   {
//     name: "Galya",
//     age: 18,
//   },
// ];
// // console.log(arr.includes("w")); // true
// // console.log(arr.includes("ww")); // false

// // some()  ->
// // const isAdult = users.some(function (arrayElement, index, currentArray) {
// //   if (user["age"] >= 18) {
// //     return true;
// //   } else {
// //     return false;
// //   }
// // });
// // console.log(isAdult); // true
// const Ivan = users.filter(function(user) {
//     return user.name !== 'Ivan';
// })
// // filter() -->

// // const Ivan = users.find(function(u) {
// //     return u.name === 'Ivan'
// // })

// // console.log(Ivan.age)

// // const numbers = [1,7,9,2,3,5,4, 88888, -111, 2222242222222, 33];

// // const sortedNumber = numbers.sort(function(a,b) {
// //     if(a<b) {
// //         return -1
// //     }
// //     if(a>b) {
// //         return 1;
// //     }
// //     return 0;
// //  })

// // const keys = Object.keys(users[0]);
// // console.log(keys);
// // const values = Object.values(users[0]);
// // console.log(values);
// // {
// //     names:['vaysa', 'Galues'];
// // }
// // const allNames = users.reduce(function(acc, currentElement, index, currentArray) {
// //     if(!Object.keys(acc).length) {
// //         acc['names'] = []
// //         acc.names.push(currentElement.name);
// //         return acc;
// //     }else {
// //         acc.names.push(currentElement.name);
// //         return acc;
// //     }
// // }, {})

// const usersIsAllowedToDrink = users.map(function(user) {

//     return {
//         name: user.name,
//         age: user.age,
//         isAllowed: user.age >= 18,
//     };
// }
// )

// // forEach  -->
// console.log(usersIsAllowedToDrink);
// // console.log(totalAge/users.length)

// //
// // 1 нам нужно посчитать юзеров
// // 2 создать функцию
// // 3 описать логику
// // 4 вывести результат
// // function calcUsers(usersArray) {
// //   let result = 0;

// //   do {
// //     result++;
// //   } while (usersArray[result]);

// //   return result;
// // }

// // const amountOfUsers = calcUsers(users);
// // console.log("amountOfUsers", amountOfUsers);

//  общая функция калькулятор
//  функция запросить данные у пользователя
//  функция проверки операции
//  функция проверки кол-во предп. чисел
//  функция проверки самих чисел
//  функция подсчета
//  функция показа результата

function calculator() {
  const LIST_OF_OPERATORS = ["+", "-", "*", "/"];
  const MIN_AMOUNT_OF_OPERANDS = 2;
  const MAX_AMOUNT_OF_OPERANDS = 5;

  let totalAmountOfOperands = 0;
  let operator = null;
  let usersNumbers = [];
  let resultMessage = "";
  let result = 0;

  function askUser(message) {}

  function checkTotalAmountOfNumbers(totalAmount, minValue, maxValue) {}

  function checkOperator(availableOperators) {}

  function getUserNumbers(totalAmountOfOperands){} // askUser, checkUserNumber, push to array, return array

  function checkUserNumber(number) {}

  function calcResult(operands, operator, usersNumbers) {}

  function showResult(result, resultMessage) {}

  totalAmountOfOperands = askUser("some message");
  checkTotalAmountOfNumbers(
    totalAmountOfOperands,
    MIN_AMOUNT_OF_OPERANDS,
    MAX_AMOUNT_OF_OPERANDS
  );

  operator = askUser('some message');

  checkOperator(LIST_OF_OPERATORS);

  usersNumbers = getUserNumbers(totalAmountOfOperands); 

  result = calcResult(totalAmountOfOperands, operator, usersNumbers )

  showResult(result, resultMessage)

}

number = 4
do{
number--
}while(number)