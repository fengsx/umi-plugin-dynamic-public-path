import React from 'react';
import styles from './index.css';

const DynamicChildren = () => (
  <>
    <span className={styles.dynamic}>Umi</span>
    <p>PLUGIN_NAME: {process.env.PLUGIN_NAME}</p>
    <p>NODE_ENV: {process.env.NODE_ENV?.toString()}</p>
    <p>NEED_CURRENTSCRIPT_POLYFILL: {process.env.NEED_CURRENTSCRIPT_POLYFILL?.toString()}</p>
  </>
);

export default DynamicChildren;
