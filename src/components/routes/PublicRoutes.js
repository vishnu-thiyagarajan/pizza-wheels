import Home from "../pages/Home";
import About from "../pages/About";
import Page404 from "../pages/Page404";

const PublicRoutes = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/about",
    component: About,
    exact: true,
  },
  {
    path: "/404",
    component: Page404,
    exact: true,
  },
];

export default PublicRoutes;
