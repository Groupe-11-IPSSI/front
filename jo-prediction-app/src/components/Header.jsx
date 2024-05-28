import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          JO Prediction App
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/winter">
          Winter Games
        </Button>
        <Button color="inherit" component={Link} to="/summer">
          Summer Games
        </Button>
        <Button color="inherit" component={Link} to="/analysis">
          Analysis
        </Button>
        <Button color="inherit" component={Link} to="/facts">
          Olympic Facts
        </Button>
        <Button color="inherit" component={Link} to="/predictions">
          Predictions
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
