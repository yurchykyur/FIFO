import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import ResponsiveDrawer from 'components/Drawer';
// import ResponsiveAppBar from 'components/ResponsiveAppBar';

export default function Layout() {
  return (
    <div>
      {/* <ResponsiveAppBar /> */}
      <ResponsiveDrawer>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </ResponsiveDrawer>
    </div>
  );
}
