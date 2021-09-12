import React from "react";

import SearchAppBar from "../AppBar/SearchAppBar";
import Collections from "../Drawer/Collections";
import ListPizzas from "../Main/ListPizzas";

function Home() {
  // const dispatch = useDispatch();
  // const pizza = useSelector((state) => state.pizza.pizza);
  return (
    <>
      <SearchAppBar />
      <Collections />
      <ListPizzas />
    </>
  );
}

export default Home;
