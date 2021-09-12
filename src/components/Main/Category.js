import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useInView } from "react-intersection-observer";
import { makeStyles } from "@material-ui/core/styles";

import { setInView } from "../../redux";
import PizzaCard from "./PizzaCard";

const useStyles = makeStyles((theme) => ({
  content: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-evenly",
    alignContent: "center",
    paddingTop: "20px",
  },
}));

function Category(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [ref, inView] = useInView({
    threshold: 0.1,
  });
  React.useEffect(() => {
    if (inView) dispatch(setInView(props.name));
  }, [inView, props.name, dispatch]);
  const pizzas = useSelector((state) => state.pizza.pizzas);
  return (
    <>
      <div ref={ref} className={classes.content}>
        {pizzas[props.name].map((pizza, index) => (
          <PizzaCard key={index} pizza={pizza} index={index} />
        ))}
      </div>
    </>
  );
}

export default Category;
