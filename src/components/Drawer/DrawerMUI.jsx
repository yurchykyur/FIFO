import * as React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';

import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import ListItemText from '@mui/material/ListItemText';
import Container from '@mui/material/Container';

import ContentToolbarForDrawer from './ToolbarForDrawer';
import Broker from './Brokers';
import Operations from './Operations';

import { drawerWidth } from 'constants/drawer';
import * as myRoute from 'constants/Routes';

const isLoggedIn = true;

// ['Сформувати звіт', 'Корисні відео', 'Нормативи']
const arrLinks = [
  myRoute.generateReport,
  myRoute.usefullMaterial,
  myRoute.normative,
];

function DrawerMUI(props) {
  const { window, children } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Toolbar />
      <Broker
        nestedList={{
          primaryTitle: 'Брокер',
          nestedItems: ['Freedom Finance', 'Interactive Brokers'],
          nestedLinks: [myRoute.freedomFinance, myRoute.interactiveBrokers],
        }}
      />

      <Operations
        nestedList={{
          primaryTitle: 'Операції',
          nestedItems: ['Купити', 'Продати'],
          nestedLinks: [myRoute.buy, myRoute.sell],
        }}
      />
      <Divider />
      <List>
        {['Сформувати звіт', 'Корисні відео', 'Нормативи'].map(
          (text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton component={RouterNavLink} to={arrLinks[index]}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>

                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: theme => theme.zIndex.drawer + 1 }}
      >
        <Container maxWidth="lg">
          <Toolbar>
            {isLoggedIn && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { lg: 'none' } }}
              >
                <MenuIcon />
              </IconButton>
            )}

            <ContentToolbarForDrawer isLoggedIn={isLoggedIn} />
          </Toolbar>
        </Container>
      </AppBar>

      {isLoggedIn && (
        <>
          <Box
            component="nav"
            sx={{ width: { lg: drawerWidth }, flexShrink: { sm: 0 } }}
            aria-label="mailbox folders"
          >
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Drawer
              container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                display: { xs: 'block', lg: 'none' },
                '& .MuiDrawer-paper': {
                  boxSizing: 'border-box',
                  width: drawerWidth,
                },
              }}
            >
              {drawer}
            </Drawer>
            <Drawer
              variant="permanent"
              sx={{
                display: { xs: 'none', lg: 'block' },
                '& .MuiDrawer-paper': {
                  boxSizing: 'border-box',
                  width: drawerWidth,
                },
              }}
              open
            >
              {drawer}
            </Drawer>
          </Box>
        </>
      )}

      {isLoggedIn ? (
        <>
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: 3,
              width: { lg: `calc(100% - ${drawerWidth}px)` },
            }}
          >
            <Toolbar />
            <Box
              component="div"
              sx={{
                flexGrow: 1,
                p: 3,
                width: { lg: `calc(100% - ${drawerWidth}px - 32 px)` },
                height: '80vh',
                background: '#ddcece',
                borderRadius: 2,
                overflow: 'auto',
              }}
            >
              {children}
            </Box>
          </Box>
        </>
      ) : (
        <>{children}</>
      )}
    </Box>
  );
}

DrawerMUI.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerMUI;
