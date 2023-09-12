import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link } from '@mui/material';

import AuthNav from './AuthNav';
import UserMenu from './UserMenu';

import * as myRoute from 'constants/Routes';

function ContentToolbarForDrawer({ isLoggedIn }) {
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <Link
        variant="h6"
        noWrap
        component={RouterLink}
        to={myRoute.home}
        underline="hover"
        sx={{
          mr: 10,
          display: { xs: 'none', md: 'flex' },
          fontFamily: 'Roboto',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        FIFO
      </Link>
      <Link
        variant="h5"
        noWrap
        component={RouterLink}
        to={myRoute.home}
        underline="hover"
        sx={{
          mr: 2,
          display: { xs: 'flex', md: 'none' },
          flexGrow: 1,
          fontFamily: 'Roboto',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        FIFO
      </Link>
      <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        <Typography
          variant="body1"
          noWrap
          component="p"
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 500,
            letterSpacing: '.15rem',
            color: 'inherit',
          }}
        >
          First in - First out
        </Typography>
      </Box>
      {isLoggedIn ? (
        <UserMenu
          valueAnchorElUser={anchorElUser}
          onCloseUserMenu={handleCloseUserMenu}
          onOpenUserMenu={handleOpenUserMenu}
        />
      ) : (
        <AuthNav />
      )}
    </>
  );
}
export default ContentToolbarForDrawer;
