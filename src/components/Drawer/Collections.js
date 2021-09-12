import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-scroll";

import { setInView } from "../../redux";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  item: {
    borderRight: "3px solid " + theme.palette.primary.main,
  },
  topic: {
    display: "flex",
    justifyContent: "center",
    fontSize: "30px",
    color: theme.palette.secondary.light,
  },
  listItemText: {
    fontWeight: 600,
    color: theme.palette.primary.main,
  },
}));

export default function Collections() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const pizzas = useSelector((state) => state.pizza.pizzas);
  const inView = useSelector((state) => state.pizza.inView);
  const categoryList = pizzas ? Object.keys(pizzas) : [];

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <div className={classes.topic}>
            <LocalShippingIcon style={{ fontSize: 40 }} color="disabled" />
            Collections
          </div>
          <List>
            {categoryList.map((text, index) => (
              <Link to={text} spy={true} smooth={true} key={index}>
                <ListItem
                  onClick={() => dispatch(setInView(text))}
                  button
                  className={inView === text ? classes.item : ""}
                >
                  <ListItemText
                    classes={
                      inView === text ? { primary: classes.listItemText } : {}
                    }
                    primary={text}
                  />
                </ListItem>
              </Link>
            ))}
          </List>
        </div>
      </Drawer>
    </div>
  );
}
