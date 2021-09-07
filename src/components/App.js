import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import { Provider } from "react-redux";
import axios from "axios";

import store from "../redux/store";
import PublicRoutes from "./routes/PublicRoutes";
import PrivateRoutes from "./routes/PrivateRoutes";
import ProtectedRoute from "./routes/ProtectedRoute";

axios.defaults.baseURL = process.env.REACT_APP_DBURL;

function App() {
  axios
    .get("/")
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  return (
    <>
      <Provider store={store}>
        <Router>
          <div>
            Base setup
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/cart">Cart</Link>
                </li>
                <li>
                  <Link to="/payment">Payment</Link>
                </li>
              </ul>
            </nav>
          </div>
          <Switch>
            {PublicRoutes.map((route, index) => (
              <Route
                key={index}
                exact={route.exact}
                path={route.path}
                component={route.component}
              />
            ))}
            {PrivateRoutes.map((route, index) => (
              <ProtectedRoute
                key={index}
                exact={route.exact}
                path={route.path}
                component={route.component}
                requiredRoles={route.requiredRoles}
              />
            ))}
          </Switch>
        </Router>
      </Provider>
    </>
  );
}

export default App;
