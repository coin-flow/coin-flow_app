const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');
const path = require('path');

const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')]
	}
};

module.exports = withVanillaExtract(nextConfig);
