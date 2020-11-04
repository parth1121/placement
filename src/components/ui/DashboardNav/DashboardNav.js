import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  useScrollTrigger,
  Tab,
  Tabs,
  Menu,
  MenuItem,
  useMediaQuery,
  SwipeableDrawer,
  Button,
  IconButton,
} from "@material-ui/core";
import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Link } from "react-router-dom";

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      opacity: 0.7,
    },
  },
}))(MenuItem);

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    [theme.breakpoints.down("md")]: {
      marginBottom: "0.8em",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1.6em",
    },
  },
  logo: {
    height: "3em",
    marginLeft: "200px",
    [theme.breakpoints.down("md")]: {
      marginLeft: "40px",
    },
  },
  tabsContainer: {
    marginLeft: "auto",
    marginRight: "200px",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px",
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: "50px",
    marginLeft: "50px",
    marginRight: "25px",
    height: "45px",
  },
  logoContainer: {
    padding: "0",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  menu: {
    backgroundColor: "#ffffff",
    color: "#000000",
    borderRadius: "0px",
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
  },
  drawerIconContainer: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  drawerIcon: {
    height: "50px",
    width: "50px",
  },
  drawer: {
    backgroundColor: "#ffffff",
  },
  drawerItem: {
    ...theme.typography.tab,
    color: "#000000",
    opacity: 0.7,
  },
  drawerItemSelected: {
    "& .MuiListItemText-root": {
      opacity: 1,
    },
  },
  appbar: {
    zIndex: theme.zIndex.modal + 1,
    backgroundColor: "#ffffff",
    color: "#000000",
  },
}));

const DashboardNav = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const menuOptions = [
    {
      name: `Divyanshu Rawat \n
      divyanshu.19r@gmail.com`,
      link: "/services",
      activeIndex: 3,
      selectedIndex: 0,
    },
    {
      name: "Custom Software Development",
      link: "/custom-software",
      activeIndex: 3,
      selectedIndex: 1,
    },
    {
      name: "Mobile App Development",
      link: "/mobile-app",
      activeIndex: 3,
      selectedIndex: 2,
    },
    {
      name: "Web App Development",
      link: "/web-app",
      activeIndex: 3,
      selectedIndex: 3,
    },
  ];

  const routes = [
    { name: "Dashboard", link: "/dashboard/", activeIndex: 0 },
    {
      name: "Post Job",
      link: "/dashboard/post-job/",
      activeIndex: 1,
    },
    {
      name: "Post Internship",
      link: "/dashboard/post-internship/",
      activeIndex: 2,
    },
  ];

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  const handleMenuItemClick = (e, idx) => {
    setAnchorEl(null);
    setOpenMenu(false);
    setSelectedIndex(idx);
  };

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
  }, [value, selectedIndex, routes, menuOptions]);

  const drawerTab = (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolbarMargin} />
        <List disablePadding>
          {routes.map((route, idx) => (
            <ListItem
              key={`${route}${idx}`}
              onClick={() => {
                setOpenDrawer(false);
                setValue(route.activeIndex);
              }}
              classes={{ selected: classes.drawerItemSelected }}
              divider
              button
              selected={value === route.activeIndex}
            >
              <ListItemText disableTypography className={classes.drawerItem}>
                {route.name}
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </React.Fragment>
  );

  const tabs = (
    <React.Fragment>
      <Tabs
        value={value}
        onChange={handleChange}
        className={classes.tabsContainer}
      >
        {routes.map((route, index) => (
          <Tab
            key={`${route}${index}`}
            className={classes.tab}
            label={route.name}
            aria-controls={route.ariaControls}
            aria-haspopup={route.ariaPopup}
            onMouseOver={route.mouseOver}
            component={Link}
            to={route.link}
          />
        ))}
        <Tab
          className={classes.tab}
          label={<AccountCircleIcon />}
          aria-owns="customized-menu"
          aria-haspopup="true"
          onMouseEnter={handleClick}
        />
      </Tabs>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{
          onMouseLeave: handleClose,
        }}
      >
        {menuOptions.map((menuOption, idx) => (
          <StyledMenuItem key={`${menuOption}${idx}`}>
            <ListItemText primary={menuOption.name} />
          </StyledMenuItem>
        ))}
      </StyledMenu>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed" className={classes.appbar}>
          <Toolbar disableGutters>
            <Button
              disableRipple
              className={classes.logoContainer}
              onClick={() => setValue(0)}
            >
              <img
                className={classes.logo}
                src="https://internshala.com/static/images/common/new_internshala_logo.svg"
                alt="Brand Logo"
              />
            </Button>
            {matches ? drawerTab : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
};

export default DashboardNav;
