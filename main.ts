#!/usr/bin/env node

//loops
//while loop
import inquirer from "inquirer"
let todos=[];
let condition=true;
while(condition)
{let ans= await inquirer.prompt([{
    name:"select",
    type:"list",
    message:"Select an option",
    choices:["Add","Update","View","Delete","Exit"]
}])


if (ans.select==="Add"){
    let addtodo=await inquirer.prompt([{
        name:"todo",
        type:"input",
        message:"what would u like to add in the list",
        validate:function(input){
            if(input.trim()==""){
                return"please enter a non empty item"
            }
        },return: true
    }])
    if(addtodo.todo.trim()!=="")

    

   { todos.push(addtodo.todo);
    console.log(todos);}
}
if (ans.select==="Update"){
    let updateTodo=await inquirer.prompt([{
        name:"todo",
        type:"list",
        message:"update items in the list",
        choices:todos.map(item=>item)
    }])
    let addtodo=await inquirer.prompt([{
        name:"todo",
        type:"input",
        message:"what would u like to replace in the list"
    }])
    let newTodo: any=todos.filter(val=>val!== updateTodo.todo);
    todos=[...newTodo,addtodo.todo] 
    console.log(todos);

}
if (ans.select==="View"){
    console.log("\n****TO DO LIST****\n");
    console.log(todos);
}
if (ans.select==="Delete"){
    let deleteTodo=await inquirer.prompt([{
        name:"todo",
        type:"list",
        message:"select item to delete",
        choices:todos.map(item=>item)
    }])    
    let newTodo: any=todos.filter(val=>val!== deleteTodo.todo);
    todos=[...newTodo] 
    console.log(todos);
}
if (ans.select==="Exit"){
    console.log("exiting program");
    condition=false;
}
}



