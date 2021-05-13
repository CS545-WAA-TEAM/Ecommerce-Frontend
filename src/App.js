import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Products from './containers/Products/Products'
import Home from './pages/home/index'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route path="/products" component={Products} /> */}
        <Route path="/" component={Home} />

      </Switch>
    </BrowserRouter>
  );
}

export default App;
