import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

// import Box from '@mui/material/Box';

import DrawerMUI from 'components/Drawer';
// import AppBarNotLogged from 'components/Drawer/AppBarNotLogged';
import Footer from 'components/Footer';

export default function Layout() {
  // const isLoggedIn = true;
  return (
    <div>
      {/* {!isLoggedIn && (
        <div>
          <AppBarNotLogged />
          <Box sx={{ height: '100px' }}></Box>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </div>
      )} */}

      {/* {isLoggedIn && ( */}
      <DrawerMUI>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </DrawerMUI>
      {/* )} */}
      <Footer />
    </div>
  );
}
