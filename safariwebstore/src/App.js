import React from "react";
import "./App.css";
import Home from "./components/Home";
import Clothes from "./components/Clothes";
import Shoes from "./components/Shoes";
import Accessories from "./components/Accessories";
import Cart from "./components/Cart";
import Account from "./components/Account";
import Favourites from "./components/Favourites";
import NavBar from "./components/NavBar";
import Sidebar from "./components/SideBar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Logo from "./logo.svg";
function App() {
  return (
    <>
      <main>
        <Router>
          <NavBar />
          <Sidebar />
          <Footer />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/clothes" component={Clothes} />
            <Route path="/shoes" component={Shoes} />
            <Route path="/accessories" component={Accessories} />
            <Route path="/logo">
              <img svg={Logo} alt="logo" />
            </Route>
            <Route path="/cart" component={Cart} />
            <Route path="/account" component={Account} />
            <Account />
            <Route path="/favourite" component={Favourites} />
            <Route exact path="/"></Route>
            <Route path="/blogs"></Route>
            <Route path="/contact"></Route>
          </Switch>
        </Router>
      </main>
    </>
  );
}

export default App;
