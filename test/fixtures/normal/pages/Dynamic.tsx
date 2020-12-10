import React, { Suspense } from 'react';
import styles from './index.css';

const DynamicChildren = React.lazy(() => import('./DynamicChildren'));

const Dynamic = () => (
  <div className={styles.normal}>
    Hi,
    <Suspense fallback="Suspense fallback">
      <DynamicChildren />
    </Suspense>
  </div>
);

export default Dynamic;
