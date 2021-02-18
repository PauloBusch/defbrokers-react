import React from 'react';

import SiteRoutes from './site/routes';
import AdminRoutes from './admin/routes';

export default props => (
  <div>
    <SiteRoutes />
    <AdminRoutes />
  </div>
);
