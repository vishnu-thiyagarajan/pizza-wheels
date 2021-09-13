import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";

import { getPizzas } from "../../redux";
import Category from "./Category";

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    marginTop: "50px",
    paddingTop: theme.spacing(1),
    paddingLeft: "280px",
  },
  section: {
    display: "flex",
    flexFlow: "row noWrap",
  },
}));

export default function ListPizzas() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const pizzas = useSelector((state) => state.pizza.pizzas);
  const [categoryList, setCategoryList] = React.useState([]);
  React.useEffect(() => {
    dispatch(getPizzas());
  }, [dispatch]);
  React.useEffect(() => {
    if (pizzas) {
      setCategoryList(Object.keys(pizzas));
    }
  }, [pizzas]);
  return (
    <>
      <main className={classes.content}>
        {categoryList.map((category, index) => (
          <Category name={category} key={index} />
        ))}
      </main>
    </>
  );
}
