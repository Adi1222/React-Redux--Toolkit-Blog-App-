import React, { createContext, useReducer, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import DashboardPage from "./pages/DashboardPage";
import PostsPage from "./pages/PostsPage";

/*import logo from "./logo.svg";
import "./App.css";
import HookCounter from "./components/HookCounter";
import HookCounterTwo from "./components/HookCounterTwo";
import CounterOne from "./reducers/CounterOne";
import CounterTwo from "./reducers/CounterTwo";
import CounterThree from "./reducers/CounterThree";
import ComponentA from "./components/ComponentA";
import DataFetchingOne from "./components/DataFetchingOne";
import DataFetchingTwo from "./components/DataFetchingTwo";
import Todo from "./Todo";

export const CountContext = createContext();
/*
const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

/*function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <CountContext.Provider
        value={{ countState: count, countDispatch: dispatch }}
      >
        <ComponentA />
      </CountContext.Provider>
    </div>
  );
}

const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};

function reducer(state, action) {
  switch (action.types) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  function increment() {
    dispatch({ type: ACTIONS.INCREMENT });
  }

  return (
    <div className="App">
      <DataFetchingTwo />
    </div>
  );
}


export const ACTIONS = {
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle-todo", // either for completing or un-comleting the todo
  DELETE_TODO: "delete-todo",
};

function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];
    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    case ACTIONS.DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.payload.id);
    default:
      return todos;
  }
}

function newTodo(name) {
  return { id: Date.now(), name: name, completed: false };
}

function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    setName("");
  }

  console.log(todos);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} dispatch={dispatch} />;
      })}
    </>
  );
}

export default App;*/

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={DashboardPage} />
        <Route exact path="/posts" component={PostsPage} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
