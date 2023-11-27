import { defineConfig } from 'father';
import path from 'path';

export default defineConfig({
  alias: {
    '@': path.resolve(__dirname, './src'),
  },
  platform: 'node',
  cjs: {
    output: 'lib',
  },
});
