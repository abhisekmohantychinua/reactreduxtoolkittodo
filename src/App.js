import './App.css';
import AddTodo from './components/AddTodo';
import ReadTodo from './components/ReadTodo';

function App() {
  return (
    <div className="App h-screen flex flex-col bg-black justify-center items-center  text-white">
      <AddTodo />
      <ReadTodo />
    </div>
  );
}

export default App;
