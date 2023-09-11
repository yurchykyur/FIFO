import { Box, Link } from '@mui/material';
import { NavLink as RouterNavLink } from 'react-router-dom';

export default function AuthNav() {
  return (
    <>
      <Box sx={{}}>
        <Link
          variant="body1"
          noWrap
          component={RouterNavLink}
          to="/"
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
      </Box>
      <Box sx={{}}>
        <Link
          variant="body1"
          noWrap
          component={RouterNavLink}
          to="/login"
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
      </Box>
      <Box sx={{}}>
        <Link
          variant="body1"
          noWrap
          component={RouterNavLink}
          to="/register"
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
    </>
  );
}
