import { defineConfig } from 'vite';
import { resolve } from 'node:path';

const pages = [
  'index',
  'app/index',
  'about/index',
  'signin/index',
  'compare/index',
  'compare/dessertduo/index',
  'compare/flavordb/index',
  'compare/foodpairing/index',
  'compare/sidechef/index',
  'compare/tastewise/index'
];

export default defineConfig({
  build: {
    rollupOptions: {
      input: Object.fromEntries(
        pages.map((page) => [page.replaceAll('/', '-'), resolve(`${page}.html`)]),
      ),
    },
  },
});