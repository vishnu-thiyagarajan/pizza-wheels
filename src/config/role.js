export const UserRoles = {
  superadmin: "superadmin",
  admin: "admin",
  deoperator: "deoperator",
};

const roles = {
  superadmins: [UserRoles.superadmin],
  deoperatorsandadmins: [UserRoles.admin, UserRoles.deoperator],
  admins: [UserRoles.admin],
  deoperators: [UserRoles.deoperator],
  all: [UserRoles.superadmin, UserRoles.admin, UserRoles.deoperator],
};
export default roles;
