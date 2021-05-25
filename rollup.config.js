import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';

const production = !process.env.ROLLUP_WATCH;

export default {
	input: 'src/main.js',
	output: {
		sourcemap: true,
		format: 'iife',
		name: 'app',
		file: 'public/build/bundle.js'
	},
	plugins: [
		svelte({
			dev: !production,
			css: css => {
				css.write('public/build/bundle.css');
			},
			// Warnings are normally passed straight to Rollup. You can
			// optionally handle them here, for example to squelch
			// warnings with a particular code
			onwarn: (warning, handler) => {
				// e.g. I don't care about screen readers -> please DON'T DO THIS!!!
				if (warning.code === 'a11y-missing-attribute') return;

				// let Rollup handle all other warnings normally
				handler(warning);
			}
		}),

		...
	  ]
	watch: {
		clearScreen: false
	}
};

function serve() {
	let started = false;

	return {
		writeBundle() {
			if (!started) {
				started = true;

				require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
					stdio: ['ignore', 'inherit', 'inherit'],
					shell: true
				});
			}
		}
	};
}
