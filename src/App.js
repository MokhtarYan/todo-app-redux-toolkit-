import "./App.css";
import AddTask from "./components/addTask/AddTask";
import TodosList from "./components/todosList/TodosList";

function App() {
  return (
    <div className="App">
      <div className="todos">
        <h1 className="title">Today's Plan!</h1>
        <AddTask />
        <TodosList />
      </div>
    </div>
  );
}

export default App;
