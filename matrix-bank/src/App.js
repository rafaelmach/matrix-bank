import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from './pages';
import signInPage from './pages/SignInPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={signInPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
