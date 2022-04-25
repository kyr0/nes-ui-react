import { build } from "esbuild"

;(async() => {

    // https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html
    // https://github.com/evanw/esbuild/issues/334
    await build({
        entryPoints: ['./src/index.tsx'],
        jsxFactory: "createElement",
        jsxFragment: "ReactFragment",
        outfile: './dist/index.js',
        format: 'esm',
        sourcemap: true,
        minify: true,
        external: ['react', 'react-dom'],
        bundle: true,
        banner: {
            js: "import { createElement, Fragment as ReactFragment } from 'react';\n",
        }
    });

    await build({
        entryPoints: ['dist/nes-ui.debug.css'],
        bundle: true,
        minify: true,
        outfile: 'dist/nes-ui.css',
    })
})()


