import { number, string } from "yargs";
import promptSync from 'prompt-sync';
const createLogger = (value: string) => {
  return (): void => {
    console.log(value);
  };
};
const sayHi = createLogger("Arrow Function by passing value in another function ");
sayHi(); 
const prompt = promptSync();
const getInput = (promptMessage: string): string => {
  const userInput: string = prompt(promptMessage);
   return userInput;
};
const response: string = getInput('Please enter your text: ');
let message: string = "Arrow Function by passing Parameters using terminal input!";
console.log(message);
console.log(`Received string: ${response}`);
function greetUser(name: string): void {
  console.log(`${name}! `);
}
greetUser("Simple function  by passing value in string in function itself");
console.log("Simple Message! Hello & Hi")