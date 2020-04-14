import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import {terser} from 'rollup-plugin-terser';
import sveltePreprocess from 'svelte-preprocess';
import serve from 'rollup-plugin-serve';
import babel from 'rollup-plugin-babel';
import builtins from 'rollup-plugin-node-builtins';
import includePaths from 'rollup-plugin-includepaths';
import replace from "rollup-plugin-replace";

const production = !process.env.ROLLUP_WATCH;
const preprocess = sveltePreprocess({
  scss: {
    includePaths: ['src'],
  },
  postcss: {
    plugins: [require('autoprefixer')],
  },
});

export default {
  input: 'src/index.ts',
  output: {
    sourcemap: true,
    format: 'iife',
    name: 'app',
    file: 'public/build/bundle.js'
  },
  plugins: [
    svelte({
      // enable run-time checks when not in production
      dev: !production,
      // we'll extract any component CSS out into
      // a separate file - better for performance
      css: css => {
        css.write('public/build/bundle.css');
      },
      preprocess,
    }),
    resolve({
      browser: true,
      dedupe: ['svelte'],
      preferBuiltins: true,
    }),
    builtins(),
    commonjs({ include: "node_modules/**", extensions: [".js", ".ts"] }),
    !production && serve({
      contentBase: 'public',
      path: 'src',
      open: true,
      historyApiFallback: true,
      port: 3000,
      proxy: {
        // api: 'http://localhost:8080'
      }
    }),
    // Watch the `public` directory and refresh the
    // browser on changes when not in production
    !production && livereload('public'),
    production && terser(),
    babel({
      exclude: [
        'node_modules/**'
      ]
    }),
    // resolve absolute import
    includePaths({paths: ["./"], external: ['node_modules']}),
    replace({
      'process.env.NODE_ENV': JSON.stringify(production ? 'production' : 'development')
    })
  ],
  watch: {
    clearScreen: false
  }
};
