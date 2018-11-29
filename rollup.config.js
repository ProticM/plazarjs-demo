import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';
import html from 'rollup-plugin-html';

export default {
    input: './js/main.js',
    output: {
        file: './build/main.js',
        format: 'iife'
    },
    plugins: [
		postcss({
			extensions: [ '.css' ]
		}),
		html({
            include: '**/*.html'
        }),
        resolve(),
        commonjs(),
        babel({
            exclude: ['node_modules/**'],
            presets: ['@babel/preset-env']
        })
    ]
};