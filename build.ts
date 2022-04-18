const esbuild = require('esbuild');

// https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html
// https://github.com/evanw/esbuild/issues/334
esbuild.build({
    entryPoints: ['./src/index.tsx'],
    jsxFactory: "createElement",
    jsxFragment: "ReactFragment",
    outfile: './dist/index.js',
    format: 'esm',
    sourcemap: true,
    external: ['react', 'react-dom'],
    bundle: true,
    banner: {
        js: "import { createElement, Fragment as ReactFragment } from 'react';\n",
    }
});
export const lala = 123