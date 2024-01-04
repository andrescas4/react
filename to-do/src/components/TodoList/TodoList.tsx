import { Todo } from "../../model/interface";
import './toDo.css';
const TodoList: React.FC<{todosList: Todo[], removeTodo: (id: string) => void} > = (props) => {

    return (
        <aside>
            <ul className="todoList">
                {props.todosList && props.todosList.map( todo => !todo.done ? <li key={todo.id}>
                    <div className="todoContent">
                        <h2> {todo.title}</h2>
                        <p>{todo.description}</p>
                    </div>
                    <input type="checkbox" onChange={() => props.removeTodo(todo.id ? todo.id : '')}/>
                </li> : null).reverse()}
            </ul>
        </aside>
    )
}

export default TodoList;