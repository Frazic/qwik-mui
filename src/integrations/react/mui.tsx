/** @jsxImportSource react */

import { qwikify$ } from "@builder.io/qwik-react";
import {
  Button,
  createTheme,
  responsiveFontSizes,
  Slider,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import type { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { ThemeProvider } from "@mui/material";
import type { ThemeOptions } from "@mui/material";

export const MUIButton = qwikify$(Button);
export const MUISlider = qwikify$(Slider, { eagerness: "hover" });

export const TableApp = qwikify$(() => {
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "firstName", headerName: "First name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 90,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
  ];

  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];

  return (
    <>
      <h1>Hello from React</h1>

      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </>
  );
});

export const themeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#75a05b",
      light: "#fffffe",
      dark: "#658c51",
      // contrastText: '#020826',
      contrastText: "#fffffe",
    },
    secondary: {
      main: "#78518c",
      light: "#8e6ea0",
      dark: "#63357a",
      contrastText: "#fffffe",
    },
    background: {
      default: "#f9f4ef",
    },
    text: {
      primary: "#716040",
      secondary: "#405171",
      disabled: "#baaf9f",
    },
  },
  typography: {
    fontFamily: "Josefin Sans",
    fontSize: 18,
    h1: {
      fontFamily: "Mali",
    },
  },
  shape: {
    borderRadius: 0,
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        colorPrimary: {
          backgroundColor: "hsla(100, 27%, 43%, 0.8)",
          backdropFilter: "blur(3px)",
        },
      },
    },
  },
};

export interface ResponsiveNavbarProps {
  pages: {
    name: string;
    href: string;
  }[];
  userSettings: string[];
}

export const ResponsiveNavbar = qwikify$<ResponsiveNavbarProps>((props) => {
  const pages = props.pages;
  const settings = props.userSettings;

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  let theme = createTheme(themeOptions);
  theme = responsiveFontSizes(theme);

  return (
    <>
      <ThemeProvider theme={theme}>
        <AppBar position="fixed">
          <Container maxWidth="xl">
            <Toolbar disableGutters>

              {/* Mobile logo & pages */}
              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="menu"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
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
                    <MenuItem
                      key={page.name}
                      component="a"
                      href={page.href}
                      onClick={handleCloseNavMenu}
                      sx={{ textTransform: "capitalize" }}
                    >
                      <Typography textAlign="center">{page.name}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
                <a href="/" style={{ marginInline: "auto" }}>
                  <img id="home-logo" src="/logo-white.webp" />
                </a>
              </Box>

              {/* Logo Desktop */}
              <Box sx={{ display: { xs: "none", md: "block" } }}>
                <Tooltip title="Accueuil">
                  <a href="/">
                    <img id="home-logo" src="/logo-white.webp" />
                  </a>
                </Tooltip>
              </Box>

              {/* Desktop pages */}
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex" },
                  ml: "auto",
                }}
              >
                {pages.map((page) => (
                  <Button
                    key={page.name}
                    href={page.href}
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      color: "inherit",
                      textTransform: "capitalize",
                      position: "relative",
                      "::after": {
                        content: "''",
                        width: "0%",
                        height: "3px",
                        position: "absolute",
                        bottom: "0",
                        bgcolor: "#020826",
                        transition: "width 0.2s ease-in",
                      },
                      ":hover": { "::after": { width: "100%" } },
                    }}
                  >
                    {page.name}
                  </Button>
                ))}
              </Box>

              {/* AVATAR */}
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Profile">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Spaceman Spiff" src="/Spaceman_Spiff.png" />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center" textTransform="capitalize">
                        {setting}
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </ThemeProvider>
    </>
  );
});
