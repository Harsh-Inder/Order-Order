import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/Topbar/Topbar";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import UserList from "./pages/UserList/UserList";
import User from "./pages/User/User";
import NewUser from "./pages/NewUser/NewUser";
import ProductList from "./pages/ProductList/ProductList";
import Product from "./pages/Product/Product";
import NewProduct from "./pages/NewProduct/NewProduct";
import Login from "./pages/Login/Login";
import {useSelector} from "react-redux";

const App = () => {

  const admin = useSelector((state) => state.user.currentUser.isAdmin);

  return (
    <Router>
     <Switch>
     <Route path="/login">
        <Login />
      </Route>
      { admin &&  (
        <>
        <Topbar />
        <div className="container">
          <Sidebar />
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/users">
              <UserList />
            </Route>
            <Route path="/user/:userId">
              <User />
            </Route>
            <Route path="/newUser">
              <NewUser />
            </Route>
            <Route path="/products">
              <ProductList />
            </Route>
            <Route path="/product/:productId">
              <Product />
            </Route>
            <Route path="/newproduct">
              <NewProduct />
            </Route>
        </div> 
      </>
      )}
      </Switch>
    </Router>
  );
}

export default App