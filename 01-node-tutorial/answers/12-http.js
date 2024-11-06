const http = require('http');

const server = http.createServer((req, res)=> {
    console.log('Request received for:', req.url);

    res.setHeader("Content-Type", "text/plain");
    if (req.url === '/') {
        res.write('Welcome to the homepage!');
    } else if (req.url === '/about') {
        res.write("This is the about page.");
    } else {
        res.write('404 Not Found');
    }
    
    res.end();
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


