import { sveltekit } from '@sveltejs/kit/vite'

import dotenv from 'dotenv'
import { defineConfig } from 'vite'
dotenv.config()

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		strictPort: true
	},
	preview: {
		port: 5173
	}
})
