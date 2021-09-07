import Cart from "../pages/Cart";
import Payment from "../pages/Payment";
import roles from "../config/role";

const PrivateRoutes = [
  {
    path: "/cart",
    component: Cart,
    exact: true,
    requiredRoles: roles.deoperators,
  },
  {
    path: "/payment",
    component: Payment,
    exact: true,
    requiredRoles: roles.deoperators,
  },
];

export default PrivateRoutes;
