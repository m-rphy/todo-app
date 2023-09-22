import { TodoElementInterface } from "../types";
import { ListElement } from "./ListElement";

const getTodoList = async () => {
    try{
        const res = await fetch(`http://localhost:3030/api/data/get`, {
            method: 'GET',
            cache: 'no-store',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        
        const todos = await res.json();
        return todos;

    } catch (err) {
        console.error('Error:', err);
        throw err; 
    }
};


export const TodoList: React.FC= async () => {

    try {
        const todos = await getTodoList();
        return (
            <div>
                <h2>
                    Todo List
                </h2>
                <ul key={'ul-key'}>
                    {todos.map((el: TodoElementInterface, index: number) => {
                        return (
                            <li key={el._id + index}>
                                <ListElement
                                    key={el._id}
                                    _id={el._id} 
                                    name={el.name} 
                                    isDone={el.isDone}
                                />
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    } catch(err) {
        console.error('Fetch error');
    }
}
