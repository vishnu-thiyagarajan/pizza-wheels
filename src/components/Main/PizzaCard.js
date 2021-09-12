import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useSelector, useDispatch } from "react-redux";
import { addIndex } from "../../redux";

const useStyles = makeStyles({
  media: {
    height: 120,
  },
  desc: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    "-webkit-line-clamp": 4,
    "-webkit-box-orient": "vertical",
  },
  action: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: "0px",
    paddingTop: "0px",
  },
  veg: {
    maxWidth: 245,
    backgroundColor: "#E6FDE3",
  },
  nonVeg: {
    maxWidth: 245,
    backgroundColor: "#FFDEDE",
  },
});

export default function PizzaCard(props) {
  const dispatch = useDispatch();
  const { _id, name, category, description, imageUrl, price, veg } =
    props.pizza;
  const classes = useStyles();
  const imgs = useSelector((state) => state.pizza.imgs);
  return (
    <Card className={veg ? classes.veg : classes.nonVeg}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={imgs && imgs[props.index].urls.small}
          title="Pizza"
        />
        <CardContent>
          <Typography gutterBottom variant="subtitle1" component="h4" noWrap>
            {name}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.desc}
          >
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.action}>
        <h2>₹ {price}</h2>
        <Button variant="outlined" size="small" color="primary">
          Add
        </Button>
      </CardActions>
    </Card>
  );
}
