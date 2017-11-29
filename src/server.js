const http = require('http');
const router = require('./router.js');

const host = '0.0.0.0' || process.env.HOST || 'localhost';
const port = process.env.PORT || 3000;

http.createServer(router).listen(port, host, () => {
console.log(`Server running on port http://${host}:${port}`);
});
