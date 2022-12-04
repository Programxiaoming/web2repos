import React , {useContext} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import LogoutButton from '../components/LogoutButton';
import { LoggedInContext } from '../App';

const pages = ['About', 'Content', 'Contact','Details'];

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useContext(LoggedInContext);
  if(!isLoggedIn){
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              ml: 5,
              mr: 10,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 600,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Home
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Link style={{textDecoration:'none', color:'white'}} to={`/${page}`}>{page}</Link>
              </Button>
            ))}

          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )}else{
    return (
      <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              ml: 5,
              mr: 10,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 600,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Home
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Link style={{textDecoration:'none', color:'white'}} to={`/${page}`}>{page}</Link>
              </Button>
            ))}
            <LogoutButton/>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    )
  }
  ;
}
export default Header;