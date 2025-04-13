import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import TodoItemsec from "./components/TodoItemsec";

function App() {
    return (
        <center className="todo-container">
            
           <AppName />
           <AddTodo />
           <div className="items-container">
           <TodoItem />
           <TodoItemsec />
           </div>
        </center>
    );
}
export default App;