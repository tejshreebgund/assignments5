import logo from './logo.svg';
import './App.css';
import {Home} from "./Components/Home";
import {Cart} from "./Components/CartDetails";

import {Switch, Route, Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Link to = "/">Home</Link>
      <Link to = "/showCart">Cart</Link>
      <Switch>
        <Route exact path = "/">
          <Home />
        </Route>
        <Route path = "/showCart">
          <Cart />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
