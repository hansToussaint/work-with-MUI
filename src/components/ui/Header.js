import useScrollTrigger from "@mui/material/useScrollTrigger";
import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/material/styles";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import Button from "@mui/material/Button";

import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

function ElevationScroll({ children }) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const PREFIX = "Header";
const classes = {
  toolbarMargin: `${PREFIX}-toolbarMargin`,
  logo: `${PREFIX}-logo`,
  button: `${PREFIX}-button`,
  menu: `${PREFIX}-menu`,
};

const Div = styled("div")(({ theme }) => ({
  [`&.${classes.toolbarMargin}`]: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "1.25em",
    },
  },
}));

const Img = styled("img")(({ theme }) => ({
  [`&.${classes.logo}`]: {
    height: "8em",
    [theme.breakpoints.down("md")]: {
      height: "7em",
    },
    [theme.breakpoints.down("sm")]: {
      height: "5em",
    },
  },
}));

const tabStyled = {
  fontFamily: "Raleway",
  textTransform: "none",
  fontWeight: 700,
  fontSize: "1rem",
  minWidth: 10,
  color: "#fff",
  marginLeft: "25px",
};

const ButtonStyled = styled(Button)(({ theme }) => ({
  [`&.${classes.button}`]: {
    ...theme.typography.estimate,
    borderRadius: "50px",
    marginLeft: "50px",
    marginRight: "25px",
    height: "45px",
  },
}));

const MenuStyled = styled(Menu)(({ theme }) => ({
  "& .MuiPaper-root": {
    backgroundColor: theme.palette.common.blue,
    color: "white",
    borderRadius: 0,
  },
  "& .MuiMenuItem-root": {
    // ...theme.typography.tab,
    fontFamily: "Raleway",
    fontWeight: 700,
    fontSize: "1rem",
    opacity: 0.7,

    "&:hover": {
      opacity: 1,
    },
  },

  zIndex: 1302,
}));

const drawerIconContainerStyled = {
  marginLeft: "auto",
};

const drawerIconStyled = {
  height: "50px",
  width: "50px",
};

const SwipeableDrawerStyled = styled(SwipeableDrawer)(({ theme }) => ({
  "& .MuiPaper-root": {
    backgroundColor: theme.palette.common.blue,
  },
}));

const ListItemTextStyled = styled(ListItemText)(({ theme }) => ({
  ...theme.typography.tab,
  color: "white",
  opacity: 0.7,
}));

const DrawerItemEstimateStyled = styled(ListItemButton)(({ theme }) => ({
  backgroundColor: theme.palette.common.orange,
}));

const AppBarStyled = styled(AppBar)(({ theme }) => ({
  zIndex: theme.zIndex.modal + 1,
}));

/////

function Header({ value, setValue, selectedIndex, setSelectedIndex }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);

  const iOS =
    typeof navigator !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  function handleChange(_, newValue) {
    setValue(newValue);
  }

  function handleClick(e) {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  }

  function handleMenuItemClick(event, i) {
    setAnchorEl(null);
    setOpenMenu(false);
    setSelectedIndex(i);
  }

  function handleClose(e) {
    setAnchorEl(null);
    setOpenMenu(false);
  }
  const menuOptions = [
    {
      name: "Custom Software Development",
      link: "/customsoftware",
      activeIndex: 1,
      selectedIndex: 0,
    },
    {
      name: "Mobile App Development",
      link: "/mobileapps",
      activeIndex: 1,
      selectedIndex: 1,
    },
    {
      name: "Website Development",
      link: "/websites",
      activeIndex: 1,
      selectedIndex: 2,
    },
  ];

  const routes = [
    { name: "Home", link: "/", activeIndex: 0 },
    {
      name: "Services",
      link: "/services",
      activeIndex: 1,
      ariaOwns: anchorEl ? "simple-menu" : undefined,
      ariaPopup: anchorEl ? true : undefined,
      mouseOver: (event) => handleClick(event),
    },
    { name: "The revolution", link: "/revolution", activeIndex: 2 },
    { name: "About Us", link: "/about", activeIndex: 3 },
    { name: "Contact Us", link: "/contact", activeIndex: 4 },
  ];

  useEffect(() => {
    [...menuOptions, ...routes].forEach((route) => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (value !== route.activeIndex) {
            setValue(route.activeIndex);

            if (route.selectedIndex && route.selectedIndex !== selectedIndex) {
              setSelectedIndex(route.selectedIndex);
            }
          }
          break;
        default:
          break;
      }
    });
  }, [value, menuOptions, selectedIndex, routes]);

  const tabs = (
    <>
      <Tabs
        sx={{ marginLeft: "auto" }}
        value={value}
        onChange={handleChange}
        textColor="inherit"
        indicatorColor="primary"
      >
        {routes.map((route, index) => (
          <Tab
            key={`${route}${index}`}
            sx={tabStyled}
            component={Link}
            to={route.link}
            label={route.name}
            aria-owns={route.ariaOwns}
            aria-haspopup={route.ariaPopup}
            onMouseOver={route.mouseOver}
          />
        ))}
      </Tabs>

      <ButtonStyled
        className={classes.button}
        variant="contained"
        color="secondary"
      >
        Free Estimate
      </ButtonStyled>

      <MenuStyled
        id="simple-menu"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
        elevation={0}
      >
        {menuOptions.map((option, i) => (
          <MenuItem
            key={`${option}${i}`}
            component={Link}
            to={option.link}
            selected={i === selectedIndex}
            onClick={(event) => {
              handleMenuItemClick(event, i);
              setValue(1);
              handleClose();
            }}
          >
            {option.name}
          </MenuItem>
        ))}
      </MenuStyled>
    </>
  );

  const drawer = (
    <>
      <SwipeableDrawerStyled
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
      >
        <Div className={classes.toolbarMargin} />

        <List disablePadding>
          {routes.map((route) => (
            <ListItemButton
              key={`${route}${route.activeIndex}`}
              onClick={() => {
                setOpenDrawer(false);
                setValue(route.activeIndex);
              }}
              divider
              component={Link}
              to={route.link}
              selected={value === route.activeIndex}
            >
              <ListItemTextStyled
                sx={value === route.activeIndex && { opacity: 1 }}
                disableTypography
              >
                {route.name}
              </ListItemTextStyled>
            </ListItemButton>
          ))}

          <DrawerItemEstimateStyled
            onClick={() => {
              setOpenDrawer(false);
              setValue(5);
            }}
            divider
            component={Link}
            to="/estimate"
            selected={value === 5}
          >
            <ListItemTextStyled
              sx={value === 5 && { opacity: 1 }}
              disableTypography
            >
              Free Estimate
            </ListItemTextStyled>
          </DrawerItemEstimateStyled>
        </List>
      </SwipeableDrawerStyled>

      <IconButton
        sx={drawerIconContainerStyled}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon sx={drawerIconStyled} />
      </IconButton>
    </>
  );

  return (
    <>
      <ElevationScroll>
        <AppBarStyled position="fixed">
          <Toolbar disableGutters>
            <Button
              component={Link}
              to="/"
              sx={{ padding: 0 }}
              disableRipple
              onClick={() => setValue(0)}
            >
              <Img alt="company logo" src={logo} className={classes.logo} />
            </Button>

            {matches ? drawer : tabs}
          </Toolbar>
        </AppBarStyled>
      </ElevationScroll>
      <Div className={classes.toolbarMargin} />
    </>
  );
}

export default Header;
