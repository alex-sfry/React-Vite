// eslint-disable-next-line import/namespace
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import eslint from 'vite-plugin-eslint';
import svgr from 'vite-plugin-svgr';

export default defineConfig(() => {
    return {
        server: {
            open: true,
        },
        build: {
            outDir: 'build',
        },
        plugins: [
            react(),
            eslint(),
            svgr({ svgrOptions: { icon: true } }),
        ],
    };
});