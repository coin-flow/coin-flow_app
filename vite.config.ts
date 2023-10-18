import { defineConfig } from "vite";

const userConfig = defineConfig({
	base: "/",
	server: {
		host: "localhost",
		port: 3035,
	},
	plugins: [],
});

export default userConfig;
