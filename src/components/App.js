import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import PublicRoutes from "./routes/PublicRoutes";
import PrivateRoutes from "./routes/PrivateRoutes";
import ProtectedRoute from "./routes/ProtectedRoute";
function App() {
  return (
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
  );
}

export default App;