module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:3000/api',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
    baseUrl: process.env.NODE_ENV === "production" ? "./" : "/"
}