fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
     const completed = json.reduce((reducer, todo) => {
        if(!todo.completed){
           reducer.push(todo)
        }
    return reducer 
     },[])
    console.log(completed.map( task =>{
        return {
        userID: task.userId,
        todoTitle: task.title
        }
     }))
  })
  .catch(function(err) { 
    console.log(err);
  });