import { number,string } from "yargs";
import promptSync from 'prompt-sync';
const prompt = promptSync();
const addAndPrint = (num1: number, num2: number): void => {
    const sum: number = num1 + num2;
  
     console.log(`The sum of ${num1} and ${num2} is: ${sum}`);
};
const input1: string | null = prompt("Enter the first number:");
const input2: string | null = prompt("Enter the second number:");
if (input1 !== null && input2 !== null) {
    const firstTargetNumber: number = parseFloat(input1);
    const secondTargetNumber: number = parseFloat(input2);
    if (!isNaN(firstTargetNumber) && !isNaN(secondTargetNumber)) {
       addAndPrint(firstTargetNumber, secondTargetNumber);
    } else {
        console.error("Error: One or both inputs are not valid numbers.");
    }
} else {
    console.log("User cancelled the prompt.");
}
const x:number=25,y:number=25
const sumnew:number=x+y
console.log("Simple Sum display");
console.log(`The sum of ${x} and ${y} is: ${sumnew}`);
