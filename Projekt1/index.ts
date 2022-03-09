const express = require('express')  
const app = express()  
app.get('/', function (req, res) {  
  const num1 = +req.query.num1
  const num2 = +req.query.num2
  const operation = req.query.operation;
  switch(operation){
    case "add" : 
    const add = num1 + num2
    res.send(add.toString())
    break;
    case "subtract" : 
    const subtract = num1 - num2 
    res.send(subtract.toString())
    break;
    case "multiply" : 
    const multiply = num1 * num2
    res.send(multiply.toString())
    break;
    case "divide" :
    const divide = num1 / num2
    res.send(divide.toString())
    break;

    default:
      alert('Brak operacji')
  }


})  
app.listen(3000)  
