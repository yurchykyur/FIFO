import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import DrawerMUI from 'components/Drawer';
import Footer from 'components/Footer';

export default function Layout() {
  return (
    <div>
      <DrawerMUI>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </DrawerMUI>
      <Footer />
    </div>
  );
}
