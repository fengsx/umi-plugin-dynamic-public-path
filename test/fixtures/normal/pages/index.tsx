import React, { Suspense } from 'react';

const Dynamic = React.lazy(() => import('./Dynamic'));

export default () => (
  <Suspense fallback="Suspense fallback">
    <Dynamic />
  </Suspense>
);
