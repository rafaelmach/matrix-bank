import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import {useState, useEffect} from 'react'
import Home from './pages';
import signInPage from './pages/SignInPage';
import PuffLoader from "react-spinners/PuffLoader";
import { AppContainer } from './App.styles';


const App = () => {
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
        setLoading(false)
    }, 2000)
}, [])

  return (
    
    <AppContainer loading={loading}>
    {
      loading ? 

      <PuffLoader
      size={150}
      color={"#01BF71"}
      loading={loading}
      />
      :
      
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={signInPage} exact />
      </Switch>
    </Router> 
    }
    </AppContainer>
  );
}

export default App;
