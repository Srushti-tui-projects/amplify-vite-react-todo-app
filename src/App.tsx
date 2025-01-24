import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { useAuthenticator } from '@aws-amplify/ui-react';
import { ThemeProvider, useTheme, Alert } from '@aws-amplify/ui-react';
import Footer from './components/Footer';
import Header from './components/Header';

const client = generateClient<Schema>();

function App() {
  // const { signOut } = useAuthenticator();
  const { tokens } = useTheme();
  const { user, signOut } = useAuthenticator();
  const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);

  useEffect(() => {
    client.models.Todo.observeQuery().subscribe({
      next: (data) => setTodos([...data.items]),
    });
  }, []);

  function createTodo() {
    client.models.Todo.create({ content: window.prompt("Todo content") });
  }

  function deleteTodo(id: string) {
    client.models.Todo.delete({ id })
  }

  return (
    <ThemeProvider nonce="rAnd0m">
      <Header />
      <main>
        <h1>{user?.signInDetails?.loginId}'s todos</h1>

        <button onClick={createTodo}>+ new</button>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}
              onClick={() => deleteTodo(todo.id)}
            >{todo.content}</li>
          ))}
        </ul>
        <div>
          <br />
          <Alert
            variation="info"
            isDismissible={false}
            hasIcon={true}
            heading="Note"
            border="1px solid black "
            style={{
              borderRadius: '10px', // Add radius here
              border: '1px solid black', // Retain your custom border
              padding: '10px', // Optional: Adjust padding if needed
            }}
          >
            Double click to delete the item.
          </Alert>

          <br />
        </div>
        <br />
        <button onClick={signOut}>Sign out</button>
        <Footer />
      </main>

    </ThemeProvider>
  );
}

export default App;
