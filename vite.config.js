import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import svgr from 'vite-plugin-svgr';
import legacy from '@vitejs/plugin-legacy'

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
            legacy({
                targets: ['last 2 versions and not dead, > 0.2%, Firefox ESR'],
            })
        ],
    };
});