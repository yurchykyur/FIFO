import { Box, Link } from '@mui/material';
import { NavLink as RouterNavLink } from 'react-router-dom';
import * as myRoute from 'constants/Routes';

export default function AuthNav() {
  return (
    <Box
      component="nav"
      noWrap
      sx={{
        display: 'flex',
      }}
    >
      <Link
        variant="body1"
        noWrap
        component={RouterNavLink}
        to={myRoute.home}
        sx={{
          mr: 2,
          display: { md: 'flex' },
          fontFamily: 'Roboto',
          fontWeight: 500,
          letterSpacing: '.15rem',
          color: 'inherit',
        }}
      >
        Home
      </Link>
      <Link
        variant="body1"
        noWrap
        component={RouterNavLink}
        to={myRoute.login}
        sx={{
          mr: 2,
          display: { md: 'flex' },
          fontFamily: 'Roboto',
          fontWeight: 500,
          letterSpacing: '.15rem',
          color: 'inherit',
        }}
      >
        Sign In
      </Link>
      <Link
        variant="body1"
        noWrap
        component={RouterNavLink}
        to={myRoute.register}
        sx={{
          mr: 2,
          display: { md: 'flex' },
          fontFamily: 'Roboto',
          fontWeight: 500,
          letterSpacing: '.15rem',
          color: 'inherit',
        }}
      >
        Sign Up
      </Link>
    </Box>
  );
}
