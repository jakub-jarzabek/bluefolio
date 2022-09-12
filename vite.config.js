import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: 2137
    },
    define: {
        global: {}
    },
    resolve: {
        alias: {
            './runtimeConfig': './runtimeConfig.browser'
        }
    }
});
