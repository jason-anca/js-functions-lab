fetch("https://jsonplaceholder.typicode.com/todos")
.then(response => response.json())
.then(json => {
   const completedNum = json.reduce((total,todo,index, array) => {
    return total + todo.completed
   }, 0) // Complete this code
  console.log(completedNum)
})
.catch(function(err) { 
  console.log(err);
});