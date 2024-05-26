#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk"

class Student {name:string
    constructor(n:string){
        this.name=n }}

class Persons {
    student:Student[]=[]
    addStudent(obj:Student){
    this.student.push(obj)}}

const persons = new Persons()

const programStart = async ()=>{
        while(true){
        console.log(chalk.bold.yellow("Welcome!"));
        const ans = await inquirer.prompt({
            name:"select",
            type:"list",
            message:"Whom would you like to interact with?",
            choices:["Staff","Students","Exit"] })
        
        if(ans.select=="Staff"){
            console.log(`${chalk.italic.green(`You approch the staff room. Please feel free to ask any question.`)}`);
            
        }else if(ans.select=="Students"){
        const ans = await inquirer.prompt({
          name:"student",
          type:"input",
          message:"Enter the Student's name you wish to engage with:"  })

            const student=persons.student.find(val => val.name==ans.student)

            if(!student){
                const name = new Student(ans.student)
                persons.addStudent(name)
                console.log(`${chalk.yellow(`Hello i am ${name.name}.Nice to meet you!`)}`);
                console.log("New student added");
                console.log(`${chalk.bold.magenta("Current student's list:")}`);
                console.log(persons.student);
            }else{
                console.log(`${chalk.blue(`Hello i am ${student.name}.Nice to see you again!`)}`);
                console.log(`${chalk.bold.whiteBright("Existing student's list:")}`);
                console.log(persons.student);
            }
        }else if(ans.select=="Exit"){
            console.log("Exiting the program...");
            process.exit()
        }}}
programStart()