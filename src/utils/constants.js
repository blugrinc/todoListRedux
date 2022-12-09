//ENUM
export const todosType = {
  TO_DO: "toDo",
  DONE: "done",
  IN_PROGRESS: "inProgress",
};

/* todos[todosType.DONE]
  todos["done"]
  todos.done
  console.log(todos.done)

     //initialState
  const todos = {
    done: [{}],
    inProgress: [{}],
    toDo: [{}]
  };

  addTodo: (state, action) => {
    /* state.push(action.payload); */
/* const todToAdd = action.payload;
    const typeOfTodo = action.payload.stateTodo
    state.todos[typeOfTodo] = [...state.todos[typeOfTodo], todToAdd]
  },
    
 
const component = () => {
    return (
      <>
        <ul>
          {todos[todosType.DONE].map((todo) => (
            <li>
              {todo}
              <button onClick={updateListOfToDo(todo.id, todo.status)}>update on progress</button>
            </li>
          ))}
        </ul>
            <ul>
          {todos[todosType.IN_PROGRESS].map((todo) => ())}
            </ul>
            <ul>
          {todos[todosType.TO_DO].map((todo) => ())}
            </ul>
      </>)
};
  
const updateListOfToDo = (IdtoDoToUpdate, todoStatus) => {
    const newToDoList = todos[todoStatus].map((todo) => {
      if (todo.id === IdtoDoToUpdate) {
        return {
          ...todo,
          stateTodo: todosType.IN_PROGRESS,
        };
      }
      return todo;
    });
  }); 
 */
