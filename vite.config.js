import { defineConfig } from 'vite'

import { fileURLToPath } from 'url';
import path from 'path';
import react from '@vitejs/plugin-react'

const dirname = path.dirname(fileURLToPath(import.meta.url));
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
        app: path.resolve(dirname, './src/App.jsx'),
        config: path.resolve(dirname, './src/config.js'),
        routes: path.resolve(dirname, './src/routes'),
        themes: path.resolve(dirname, './src/themes'),
        pages: path.resolve(dirname, './src/pages'),
        hooks: path.resolve(dirname, './src/hooks'),
        store: path.resolve(dirname, './src/store'),
        components: path.resolve(dirname, './src/components'),
        utils: path.resolve(dirname, './src/utils'),
        assets: path.resolve(dirname, './src/assets'),
        layout: path.resolve(dirname, './src/layout'),
        services: path.resolve(dirname, './src/services'),
    },
},
})
