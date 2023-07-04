import { getInput } from "@actions/core";

const inputName = getInput("name")

greet(inputName)

export function greet (name: string){
    console.log(`'Hello ${name}!'`);
}