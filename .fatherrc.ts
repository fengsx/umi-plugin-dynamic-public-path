import path from 'path';
import { defineConfig } from 'father';

export default defineConfig({
  alias: {
    '@': path.resolve(__dirname, './src'),
  },
  platform: 'browser',
  cjs: {
    output: 'lib',
  }
});
