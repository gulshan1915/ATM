#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance: number = 10000; // Dollar
let mypin: number = 4567;

const main = async () => {
  let amountAns; // Define amountAns variable here to make it accessible throughout the function

  // Ask the user to enter their PIN
  const pinAnswer = await inquirer.prompt([
    {
      name: "pin",
      message: "Please enter your PIN number",
      type: "number",
    },
  ]);

  // Check if the entered PIN is correct
  if (pinAnswer.pin !== mypin) {
    console.log("Incorrect PIN code. Please try again.");
    return; // Exit the function if the PIN is incorrect
  }

  // If the PIN is correct, ask the user to select an operation
  const operationAnswer = await inquirer.prompt([
    {
      name: "operation",
      message: "Please select an option",
      type: "list",
      choices: ["Withdraw", "Check balance"],
    },
  ]);
// If the user selects to withdraw money
if (operationAnswer.operation === "Withdraw") {
  // Ask the user to select the withdrawal amount
  const withdrawalAmount = await inquirer.prompt([
    {
      name: "amount",
      type: "list",
      message: "Select the withdrawal amount",
      choices: [5000, 2000, 1000], // predefined withdrawal amounts
    },
  ]);

}
  // If the user selects to withdraw money
  if (operationAnswer.operation === "Withdraw") {
    // Ask the user to select the withdrawal amount
    const withdrawalAmount = await inquirer.prompt([
      {
        name: "amount",
        type: "number",
        message: "Enter the amount you want to withdraw",
      },
    ]);

    // Check if the withdrawal amount exceeds the current balance
    if (withdrawalAmount.amount > myBalance) {
      console.log("Insufficient balance. Please try again.");
    } else {
      // If there is enough balance, deduct the amount from the balance
      myBalance -= withdrawalAmount.amount;
      console.log({withdrawalAmount});
      console.log({myBalance});
    }
  } else if (operationAnswer.operation === "Check balance") {
    // If the user selects to check balance, display the current balance
    console.log({myBalance});
}
};

main();