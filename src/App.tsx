import TodoInput from './components/Todo/TodoInput';
import TodoList from './components/Todo/TodoList';

const App = () => {
  return (
    <main className="main">
      <div className="todo__container">
        <TodoList />
        <TodoInput />
      </div>
    </main>
  );
};

export default App;
