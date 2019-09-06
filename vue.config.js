module.exports = {
	devServer: {
		disableHostCheck: true,
		port: 8080,
		// public: '0.0.0.0:8080',
		proxy: {
			'/api': {
				target: 'https://swapi.co',
				ws: true,
				changeOrigin: true
			}
		}
	}
};
