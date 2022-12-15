# React_App with Redux Toolkit
#### Installation 
```
npm install
npx create-react-app my-app --template redux
npm install --save styled-components
npm install react-hook-form
```

## Todo List
To-do list divided into completed, started and to-do. App is structured to practise the Redux features (Store, slice, selector).  

![alt text](https://github.com/blugrinc/todoListRedux/blob/master/public/TodoList.png?raw=true)

## Main Features

- [Object structure](#ObjectStructure)
- [FormAddTodo](#FormAddTodo)
- [Button](##Button)


## ObjectStructure
path: src/features/todos/todo.slice.js 

TThe app is based on an object composed of arrays. Each array will contain the respective todo with the referenced state. 

```
export const initialState = {
  todosList: {
    [todosType.TO_DO]: [],
    [todosType.IN_PROGRESS]: [],
    [todosType.DONE]: [],
  },
};

```
The name of the array is handled by an ENUM, depending on the status of the selected 'todo' it will automatically move to the reference array. 
```
export const todosType = {
  TO_DO: "toDo",
  DONE: "done",
  IN_PROGRESS: "inProgress",
};
```

## FormAddTodo
The main function to add the todo makes use of 'React Hook Form' hooks.  Initially, a check is made to see whether the 'todo' is already present within the arrays. If the element is undefined, a 'disaptch' is performed and the object (todo) is sent to the store.  
```
 const dispatch = useDispatch();
  const todoList = useSelector(selectTodoList);

  const { register, handleSubmit, reset } = useForm()
 const onSubmit = ({ name }) => {
    const allTodo = [
      ...todoList[todosType.TO_DO],
      ...todoList[todosType.IN_PROGRESS],
      ...todoList[todosType.DONE],
    ];

    if (allTodo.find((todo) => todo.name === name) === undefined) {
      dispatch(
        addTodo({
          id: name,
          name: name.toUpperCase(),
          dueDate: new Date().toLocaleDateString(),
          stateTodo: todosType.TO_DO,
        })
      );

      reset(); //clear form after submit
    } else {
      alert("Todo already present");
    }
  };
```

## Button
In the button component we find the updateState function. This function allows the state of the individual todo to be changed. Once it has been changed, it is inserted into the new reference array and deleted from the original array.
```
const updateState = ({ id, state, newState }) => {
    const updatedState = todoList[state]
      .filter((todo) => todo.id === id) //FIX!
      .map((todo) => {
        if (todo.id === id) {
          return {
            //elementi undefined
            ...todo,
            stateTodo: newState,
          };
        }
        return todo;
      });

    const deleteTodoFromPreviousState = todoList[state].filter(
      (todo) => todo.id !== id
    );

    const list = {
      ...todoList,
      [state]: [...deleteTodoFromPreviousState],
      [newState]: [
        ...todoList[newState],
        ...updatedState.filter((todo) => todo !== undefined),
      ],
    };

    dispatch(updateStateTodo(list));
  };
  ```
