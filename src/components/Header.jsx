import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const menuItems = [
    { text: "Home", link: "/" },
    { text: "Analysis", link: "/analysis" },
    { text: "Olympic Facts", link: "/facts" },
    { text: "Predictions", link: "/predictions" },
  ];

  const drawer = (
    <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerToggle}>
      <List>
        {menuItems.map((item) => (
          <ListItem button component={Link} to={item.link} key={item.text} onClick={handleDrawerToggle}>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );

  return (
    <AppBar position="static" sx={{ zIndex: 1000 }}>
      <Toolbar>
        {isMobile && (
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerToggle} sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
        )}
        <Box>
          <Typography variant="h6">JO Prediction App</Typography>
        </Box>
        {!isMobile && (
          <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "flex-end" }}>
            {menuItems.map((item) => (
              <Button color="inherit" component={Link} to={item.link} key={item.text}>
                {item.text}
              </Button>
            ))}
          </Box>
        )}
      </Toolbar>
      {drawer}
    </AppBar>
  );
}

export default Header;
