//let fruitChaat=["banana","apple","orange"];
//console.log(fruitChaat);
//fruitChaat.push("melon"); add more items in arrays
//fruitChaat.pop();deletes the last item in arrays
//fruitChaat=fruitChaat.concat(["melon","kiwi"]);
//console.log(fruitChaat);
//loops
//while loop
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let ans = await inquirer.prompt([{
            name: "select",
            type: "list",
            message: "Select an option",
            choices: ["Add", "Update", "View", "Delete", "Exit"]
        }]);
    if (ans.select === "Add") {
        let addtodo = await inquirer.prompt([{
                name: "todo",
                type: "input",
                message: "what would u like to add in the list"
            }]);
        todos.push(addtodo.todo);
        console.log(todos);
    }
    if (ans.select === "Update") {
        let updateTodo = await inquirer.prompt([{
                name: "todo",
                type: "list",
                message: "update items in the list",
                choices: todos.map(item => item)
            }]);
        let addtodo = await inquirer.prompt([{
                name: "todo",
                type: "input",
                message: "what would u like to replace in the list"
            }]);
        let newTodo = todos.filter(val => val !== updateTodo.todo);
        todos = [...newTodo, addtodo.todo];
    }
}
