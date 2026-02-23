import { defineConfig } from 'vite';

export default defineConfig({
    server: {
        port: 3000,
        proxy: {
            '/1': {
                target: 'http://localhost:8081',
                changeOrigin: true,
            },
            '/2': {
                target: 'http://localhost:8082',
                changeOrigin: true,
            },
            '/3': {
                target: 'http://localhost:8083',
                changeOrigin: true,
            },
            '/4': {
                target: 'http://localhost:8084',
                changeOrigin: true,
            },
        },
    },
});
