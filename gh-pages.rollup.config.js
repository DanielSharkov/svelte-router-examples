import svelte from 'rollup-plugin-svelte';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import sveltePreprocess from 'svelte-preprocess';
import typescript from '@rollup/plugin-typescript';
import css from 'rollup-plugin-css-only';
import child_process from 'child_process';

const production = !process.env.ROLLUP_WATCH;

function serve() {
	let server;

	function toExit() {
		if (server) server.kill(0);
	}
	return {
		writeBundle() {
			if (server) return;
			server = child_process.spawn('npm', ['run', 'start', '--', '--dev'], {
				stdio: ['ignore', 'inherit', 'inherit'],
				shell: true
			});

			process.on('SIGTERM', toExit);
			process.on('exit', toExit);
		}
	};
}

export default [{
	input: 'simple/main.ts',
	output: {
		name: 'gh_pages_simple',
		sourcemap: !production,
		format: 'esm',
		dir: 'public/build/simple'
	},
	plugins: [
		svelte({
			preprocess: sveltePreprocess({sourceMap: !production}),
			compilerOptions: {dev: !production}
		}),
		css({output: 'bundle.css'}),
		resolve({
			browser: true,
			dedupe: ['svelte']
		}),
		commonjs(),
		typescript({
			sourceMap: !production,
			tsconfig: './tsconfig.json',
		}),
		production && terser()
	],
	watch: {clearScreen: false}
},{
	input: 'advanced/main.ts',
	output: {
		name: 'gh_pages_advanced',
		sourcemap: !production,
		format: 'esm',
		dir: 'public/build/advanced'
	},
	plugins: [
		svelte({
			preprocess: sveltePreprocess({sourceMap: !production}),
			compilerOptions: {dev: !production}
		}),
		css({output: 'bundle.css'}),
		resolve({
			browser: true,
			dedupe: ['svelte']
		}),
		commonjs(),
		typescript({
			sourceMap: !production,
			tsconfig: './tsconfig.json',
		}),
		production && terser()
	],
	watch: {clearScreen: false}
},{
	input: 'gh_pages/main.ts',
	output: {
		name: 'gh_pages',
		sourcemap: !production,
		format: 'esm',
		dir: 'public/build'
	},
	plugins: [
		svelte({
			preprocess: sveltePreprocess({sourceMap: !production}),
			compilerOptions: {dev: !production}
		}),
		css({output: 'bundle.css'}),
		resolve({
			browser: true,
			dedupe: ['svelte']
		}),
		commonjs(),
		typescript({
			sourceMap: !production,
			tsconfig: './tsconfig.json',
		}),
		!production && serve(),
		!production && livereload('public'),
		production && terser()
	],
	watch: {clearScreen: false}
}];
