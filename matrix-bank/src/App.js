import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from './pages';
import signIn from './pages/signInPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={signIn} exact />
      </Switch>
    </Router>
  );
}

export default App;
