const {createProxyMiddleware} = require('http-proxy-middleware');
module.exports = function(app) {
    app.use('/api/books',
        createProxyMiddleware({ target: 'http://localhost:9000/',
                                changeOrigin: true })
    );
    app.use('/api/todos',
        createProxyMiddleware({ target: 'http://localhost:9001/',
                                changeOrigin: true })
    );

    app.use('/users',
        createProxyMiddleware({ target: 'http://localhost:9003/',
                                changeOrigin: true })
    );

    // app.use('/oauth2',
    //     createProxyMiddleware({ target: 'http://localhost:9003/',
    //                             changeOrigin: true })
    // );
}