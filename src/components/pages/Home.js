import React from "react";
import { resetState, LoginUser } from "../../redux";
import { useSelector, useDispatch } from "react-redux";

function Home() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const login = (email, password, keepMeLoggedIn) =>
    dispatch(LoginUser(email, password, keepMeLoggedIn));
  return (
    <>
      <div>Home page</div>
      <div>{JSON.stringify(user)}</div>
      <button onClick={() => login("mrtvishnu@gmail.com", "password", true)}>
        Login
      </button>
      <button onClick={() => dispatch(resetState())}>Reset</button>
    </>
  );
}

export default Home;
