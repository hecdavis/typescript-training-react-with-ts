import React, { useState } from "react";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import { Todo } from "./todo.model";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <div className='App'>
      <NewTodo
        updateTodos={(newTodo: string) =>
          setTodos((prevState) => [
            ...prevState,
            { id: Math.random().toString(), text: newTodo },
          ])
        }
      />
      <TodoList
        items={todos}
        onDelete={(id: string) =>
          setTodos((prevState) => prevState.filter((todo) => todo.id !== id))
        }
      />
    </div>
  );
};

export default App;
