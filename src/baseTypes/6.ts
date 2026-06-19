/*
  Як ви вкажете типи для аргументів і значень цих функцій, що повертаються?
*/
function showMessage(msg: string): void;
function showMessage(message: string): void {
  console.log(message);
}

function calc(arg1: number, arg2: number): number;
function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): void;
function customError(): void {
  throw new Error('Error');
}

export {};