import { useEffect, useReducer } from "react";
import { todoReducer } from "../useReducer/todoReducer";

const initialState = [];

const initTodoApp = () => {
    return JSON.parse( localStorage.getItem( 'todos' ) ) || [];
}

// todosCount, 
// pendingTodosCount, 
export const useTodos = () => {


    const [todos, dispatch] = useReducer(todoReducer, initialState, initTodoApp);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos || [] ))

    }, [todos])
    

	const handleNewTodo = (todo) => {
		////console.log({ todo });

        const addTodoAction = {
            type: 'ADD-TODO',
            payload: todo,
        }

        dispatch( addTodoAction );
	};

    const handleDeleteTodo = (id) => {
		////console.log({ todo });

        const delTodoAction = {
            type: 'DEL-TODO',
            payload: id,
        }

        dispatch( delTodoAction );
	};

    const onToggleTodo = (id) => {

        const toggleTodoAction = {
            type: 'TOG-TODO',
            payload: id,
        }

        dispatch( toggleTodoAction );

    }

    return {
        todos,
        todosCount: todos.length, 
        pendingTodosCount: todos.filter( todo => !todo.done).length, 
        handleNewTodo,
        handleDeleteTodo,
        onToggleTodo,
    }

}
