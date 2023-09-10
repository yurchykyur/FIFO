import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Box from '@mui/material/Box';

import ResponsiveDrawer from 'components/Drawer';
import AppBarNotLogged from 'components/Drawer/AppBarNotLogged';

export default function Layout() {
  const isLoggedIn = true;
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
    </div>
  );
}
