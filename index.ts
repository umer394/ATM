#! /usr/bin/env node
import inquirer from "inquirer";

let myBalance = 12000; // Dollar
let myPin = 2003;

console.log("Welcome to ATM Machine, Created by Muhammad Umer");
console.log(`Your current balance is: ${myBalance}`);

let pinAnswers = await inquirer.prompt([
  { name: "pin", type: "number", message: "enter your pin:" },
]);

if (pinAnswers.pin === myPin) {
  console.log("Correct pin code!!");
  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      message: "Please select option?",
      type: "list",
      choices: ["withdraw", "check balance", "fast cash", "deposit amount"],
    },
  ]);
  if (operationAns.operation === "withdraw") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        message: "enter your amount",
        type: "number",
      },
    ]);
    if (amountAns.amount <= myBalance) {
      myBalance -= amountAns.amount;
      console.log(`Your remaining balance is ${myBalance}`);
    } else {
      console.log(
        "You don't have enough balance in your account to withdraw the amount you are trying to withdraw."
      );
    }
  } else if (operationAns.operation === "check balance") {
    console.log(`your balance is ${myBalance}`);
  } else if (operationAns.operation === "fast cash") {
    let chooseCash = await inquirer.prompt([
      {
        name: "cash",
        message: "Please Select Amount you want to withdraw",
        type: "list",
        choices: ["1000", "2000", "5000", "10000"],
      },
    ]);
    if (chooseCash.cash <= myBalance) {
      myBalance -= chooseCash.cash;
      console.log(`Your remaining balance is ${myBalance}`);
    } else {
      console.log(
        "You don't have enough balance in your account to withdraw the amount you are trying to withdraw."
      );
    }
  } else if (operationAns.operation === "deposit amount") {
    let depositAmount = await inquirer.prompt([
      {
        name: "deposit",
        type: "number",
        message: "How much amount you want to deposit in your account:",
      },
    ]);
    myBalance += depositAmount.deposit;
    console.log(`Your current balance after deposit is: ${myBalance}`);
  }
} else {
  console.log("Incorrect pin number");
}
