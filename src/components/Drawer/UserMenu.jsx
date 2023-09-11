import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

const settings = ['Profile', 'Account', 'Dashboard', 'Choose theme'];

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

export default function UserMenu({
  onOpenUserMenu,
  onCloseUserMenu,
  valueAnchorElUser,
}) {
  return (
    <>
      <Box sx={{}}>
        <Typography
          variant="body1"
          noWrap
          component="p"
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'Roboto',
            fontWeight: 500,
            letterSpacing: '.15rem',
            color: 'inherit',
          }}
        >
          User name
        </Typography>
      </Box>
      <Box sx={{ flexGrow: 0 }}>
        <Tooltip title="Open settings">
          <IconButton onClick={onOpenUserMenu} sx={{ p: 0, mr: 2 }}>
            <Avatar {...stringAvatar('Kent Dodds')} />
          </IconButton>
        </Tooltip>
        <Menu
          sx={{ mt: '45px' }}
          id="menu-appbar"
          anchorEl={valueAnchorElUser}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(valueAnchorElUser)}
          onClose={onCloseUserMenu}
        >
          {settings.map(setting => (
            <MenuItem key={setting} onClick={onCloseUserMenu}>
              <Typography textAlign="center">{setting}</Typography>
            </MenuItem>
          ))}
        </Menu>
        <IconButton aria-label="logout">
          <LogoutIcon sx={{ color: '#f39fad' }} />
        </IconButton>
      </Box>
    </>
  );
}
