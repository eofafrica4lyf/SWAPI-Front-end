// vue.config.js
// module.exports = {
// 	// options...
// 	proxy: {
// 		'^/api': {
// 			target: 'https://swapi.co',
// 			ws: true,
// 			changeOrigin: true
// 		}
// 	}
// };

module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://swapi.co',
        ws: true,
        changeOrigin: true
      }
    }
  }
}
