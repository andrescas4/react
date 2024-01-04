import {useState } from "react";
import { Todo } from "../../model/model";
import './sideBar.css';

const SideBar: React.FC<{handleCreateTodo:(n: Todo) => void}> = (props) => {
    const [titleTodo, setTitleTodo] = useState('');
    const [descriptionTodo, setDescriptionTodo] = useState('');

    const createTodo = () => {
        props.handleCreateTodo(new Todo(titleTodo, descriptionTodo, false));
    }

    return (
        <aside className="sideBar">
            <form className="todoForm">
                <input type="text" value={titleTodo} onChange={(e) => setTitleTodo(e.target.value)}></input>
                <textarea value={descriptionTodo} onChange={(e) => setDescriptionTodo(e.target.value)}></textarea>
                <button type="button" onClick={createTodo}>Create todo</button>
            </form>
        </aside>
    )
}

export default SideBar;