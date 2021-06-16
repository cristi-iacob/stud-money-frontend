import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './pages/login';
import Register from './pages/register';
import ToDoList from './pages/toDoList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/">
            <ToDoList />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
