import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Box from '@mui/material/Box';

import ResponsiveDrawer from 'components/Drawer';
import AppBarNotLogged from 'components/Drawer/AppBarNotLogged';
import Footer from 'components/Footer';

export default function Layout() {
  const isLoggedIn = false;
  return (
    <div>
      {!isLoggedIn && (
        <div>
          <AppBarNotLogged />
          <Box sx={{ height: '100px' }}></Box>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </div>
      )}

      {isLoggedIn && (
        <ResponsiveDrawer>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </ResponsiveDrawer>
      )}
      <Footer />
    </div>
  );
}
