import { AddElement } from "./todo-compononents/AddElement";
import { TodoList } from "./todo-compononents/TodoList";

export default function Home() {
    return (
        <main>
            <AddElement/>
            <TodoList/>
        </main>
    );
};