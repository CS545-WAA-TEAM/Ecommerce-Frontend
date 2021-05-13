import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/home/index'
import Admin from './pages/admin';
import Seller from './pages/seller';
import Buyer from './pages/buyer';
import SellerPage from './pages/common/seller-page';
import ProductPage from './pages/common/product-page';
import Login from './pages/common/login';
import Register from './pages/common/register';
function App() {

  return (
    <BrowserRouter>

      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />    
        <Route path="/admin" component={Admin}/>
        <Route path="/seller" component={Seller}/>
        <Route path="/buyer" component={Buyer}/>
        <Route path="/sellers/:id" component={SellerPage}/>
        <Route path="/products/:id" component={ProductPage}/>
        <Route exact path="/" component={Home} />
        <Route><h1>404 Not Found</h1></Route>
      </Switch>

    </BrowserRouter>
  );
}

export default App;
