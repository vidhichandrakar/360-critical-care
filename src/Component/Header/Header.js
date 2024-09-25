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
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Logo from "../../Media/Images/Logo.png";
import Logo360 from "../../Media/Media_Image/360Logo.PNG";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { styled, alpha } from "@mui/material/styles";
import EditIcon from "@mui/icons-material/Edit";
import Divider from "@mui/material/Divider";
import ArchiveIcon from "@mui/icons-material/Archive";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import DropDown from "./NestedMenu";
import { Link } from "react-router-dom";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));



const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
    <AppBar position="fixed" className="AppHeader">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{  display: { xs: "flex", md: "none" } }}>
           
            
            <Box>
              <Link to="/Critical-Care"><img src={Logo} className="Responsivelogo"/></Link> 
            </Box>
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
              className="menuSize"
            >
              <MenuItem
                key={1}
                onClick={handleCloseNavMenu}
                style={{ fontFamily: "Arial, Helvetica, sans-serif " }}
              >
                  <Link
          to="/Critical-care/AllCourse"
          style={{ fontFamily: "Arial, Helvetica, sans-serif "}}
          className="menuText"
        >  All Courses
        {/* <DropDown  variant="outlined" icon={<KeyboardArrowDownIcon className="allCoursesIcon"  />}/> */}
         </Link>
                {/* <DropDown variant="null" icon={<KeyboardArrowRightIcon className="allCoursesIcon"/>}/> */}
              </MenuItem>

              <MenuItem
                key={1}
                onClick={handleCloseNavMenu}
                style={{ fontFamily: "Arial, Helvetica, sans-serif "}}
              > 
                <Link to="/Critical-care/About-us" style={{ color: 'inherit', textDecoration: 'none'}}> 
                  <Typography
                    textAlign="center"
                    className="menuText"
                  >
                    About Us
                  </Typography>
                </Link>
              </MenuItem>

              <MenuItem
                key={1}
                onClick={handleCloseNavMenu}
                style={{ fontFamily: "Arial, Helvetica, sans-serif " }}
              >
                <Link to="/Critical-care/Contact-us" style={{ color: 'inherit', textDecoration: 'none'}}>
                  {" "}
                  <Typography
                    textAlign="center"
                    className="menuText"
                  >
                    Contact Us
                  </Typography>
                </Link>
              </MenuItem>

              <MenuItem
                key={1}
                onClick={handleCloseNavMenu}
                style={{ fontFamily: "Arial, Helvetica, sans-serif " }}
              >
                <Link to="/Critical-care/Blog" style={{ color: 'inherit', textDecoration: 'none'}}>
                  {" "}
                  <Typography
                    textAlign="center"
                    className="menuText"
                  >
                    Blog
                  </Typography>
                </Link>
              </MenuItem>

            </Menu>
          </Box>
         <Link to="/Critical-Care"><img src={Logo} sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} className='logo'  /></Link> 
        
        
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "Inter",
              fontWeight: 600,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          ></Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              marginLeft: "3%",
            }}
          >
          
            <Typography
              key={"2"}
              onClick={handleCloseNavMenu}
              sx={{
                color: "black",
                fontWeight: "600",
                marginLeft: "5%",
                // fontSize: "1.1em",
                marginTop: "9px",
                fontSize: "16px",
                fontFamily: "Arial, Helvetica, sans-serif "
              }}
            >
            <Link
          to="/Critical-care/AllCourse"
          style={{ color: "inherit", textDecoration: "none" }}
        >  All Courses
        {/* <DropDown  variant="outlined" icon={<KeyboardArrowDownIcon className="allCoursesIcon"  />}/> */}
         </Link>
         </Typography>
         
            <Typography
              key={"2"}
              onClick={handleCloseNavMenu}
              sx={{
                color: "black",
                fontWeight: "600",
                marginLeft: "5%",
                // fontSize: "1.1em",
                marginTop: "9px",
                fontSize: "16px",
                fontFamily: "Arial, Helvetica, sans-serif "
              }}
            >
              <Link
                to="/Critical-care/About-us"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                About Us
              </Link>
            </Typography>

            <Typography
              key={"3"}
              onClick={handleCloseNavMenu}
              sx={{
                color: "black",
                fontWeight: "600",
                marginLeft: "5%",
                marginTop: "9px",
                fontSize: "16px",
                lineHeight: "auto",
                fontFamily: "Arial, Helvetica, sans-serif "
              }}
            >
              <Link
                to="/Critical-care/Contact-us"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Contact Us
              </Link>
            </Typography>

            <Typography
              key={"3"}
              onClick={handleCloseNavMenu}
              sx={{
                color: "black",
                fontWeight: "600",
                marginLeft: "6%",
                marginTop: "9px",
                fontSize: "16px",
                fontFamily: "Arial, Helvetica, sans-serif "
              }}
            >
              <Link
                to="/Critical-care/Blog"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Blog
              </Link>
            </Typography>


            <Search className="headerSearchBar">
            <SearchIconWrapper>
              <SearchIcon sx={{color:"grey"}}/>
            </SearchIconWrapper>

            <StyledInputBase
              placeholder="Search Course"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>

          </Box>

          <Box sx={{ flexGrow: 0 ,position:"fixed",right:0}} className="loginContainer">
            <Button variant="contained" className="LoginButton">
              Login / Register
            </Button>
          </Box>
          <Box sx={{ mr: 3}} className="loginContainerony">
            <Button variant="contained" className="LoginButtononly">
              Login
            </Button>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              className="MenuButton"
            >
              <MenuIcon className="Hamburger"/>
              </IconButton>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>




  
     </>
  );
}
export default Header;
