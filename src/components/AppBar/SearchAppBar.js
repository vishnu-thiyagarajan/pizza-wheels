import React from "react";
import { alpha, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import SearchIcon from "@material-ui/icons/Search";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ImportExportIcon from "@material-ui/icons/ImportExport";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Button from "@material-ui/core/Button";

import Logo from "../../assets/logo.png";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "space-evenly",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    border: "2px solid grey",
    borderRadius: "12px",
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "50ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  button: {
    height: "40px",
    textTransform: "none",
  },
  vegbutton: {
    height: "40px",
    color: theme.palette.success.main,
    textTransform: "none",
  },
  containedbutton: {
    marginLeft: "10px",
    height: "40px",
    textTransform: "none",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
}));

export default function SearchAppBar() {
  const classes = useStyles();
  const [veg, setVeg] = React.useState(false);

  return (
    <div className={classes.grow}>
      <AppBar position="fixed" color="default" className={classes.appBar}>
        <Toolbar className={classes.tools}>
          <img src={Logo} alt="Pizza" />
          <div>
            <Typography variant="subtitle1" noWrap>
              <LocationOnIcon color="action" fontSize="large" />
              Provide your location
            </Typography>
          </div>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Button
              disableRipple
              variant="outlined"
              color="default"
              size="small"
              className={veg ? classes.vegbutton : classes.button}
              startIcon={<FiberManualRecordIcon />}
              onClick={() => setVeg(!veg)}
            >
              Veg Only
            </Button>
            <Badge variant="dot" color="primary">
              <Button
                disableRipple
                variant="contained"
                color="secondary"
                size="small"
                className={classes.containedbutton}
                startIcon={<ImportExportIcon />}
              >
                Sort By
              </Button>
            </Badge>
            <Badge badgeContent={4} color="secondary">
              <Button
                disableRipple
                variant="contained"
                color="primary"
                size="small"
                className={classes.containedbutton}
                startIcon={<ShoppingCartIcon />}
              >
                Cart
              </Button>
            </Badge>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
