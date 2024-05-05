import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";

import { Link as RouterLink } from "react-router-dom";
import { CESS_LOGO } from "../assets/assets-exp";
import { Link, colors } from "@mui/material";

const pages = ["Home", "Members", "Events", "Magazine", "About"];
const pagesmd = ["About", "Magazine", "Events", "Members", "Home"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      elevation={0}
      sx={{ background: "white", color: "black", position: "sticky", top: 0, zIndex:5}}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <CESS_LOGO
            height={40}
            width={40}
            sx={{ display: { xs: "none", md: "flex" } }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              ml: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Poppins",
              fontWeight: 700,
              letterSpacing: "0.05rem",
              color: colors.blue[900],
              textDecoration: "none",
              fontSize: "2rem",
            }}
          >
            CESS-ERC
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  {/* <Typography textAlign="center">{page}</Typography> */}
                  <Link
                    to={`/${page === "Home" ? "" : page.toLocaleLowerCase()}`}
                    variant="body2"
                    component={RouterLink}
                    sx={{ color: "black", textDecoration: "none" }}
                    fontFamily={"Poppins"}
                  >
                    {page}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              //   fontFamily: "Poppins",
              fontWeight: 500,
              letterSpacing: "0.05rem",
              color: "black",
              textDecoration: "none",
            }}
          >
            CESS
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              flexDirection: "row-reverse",
            }}
          >
            {pagesmd.map((page) => (
              <Link
                key={page}
                to={`/${page === "Home" ? "" : page.toLocaleLowerCase()}`}
                variant="h7"
                component={RouterLink}
                sx={{
                  color: "black",
                  textDecoration: "none",
                  margin: "auto 3% auto 1%",
                  fontWeight: 400,
                  //   backgroundColor: "red",
                }}
                fontFamily={"Poppins"}
              >
                {page}
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
