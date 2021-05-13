import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/home/index'
import Login from './components/login/Login'
import Signup from './components/Signup/Signup'
function App() {

  return (
    <BrowserRouter>

      <Switch>
        <Route exact path="/login" component={Login} />

        <Route exact path="/signup" component={Signup} />

        {/* <Route path="/products" component={Products} /> */}
        <Route path="/" component={Home} />

      </Switch>

    </BrowserRouter>
  );
}

export default App;
