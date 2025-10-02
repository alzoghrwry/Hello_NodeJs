
const http = require('http');
const fs = require('fs');
const path = require('path');

const port=3000;
const server = http.createServer((req, res) => {
   
    const filePath = path.join(__dirname, 'index.html');
    
 
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('خطأ في تحميل الصفحة');
            return;
        }
        
        
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(data);
    });
});


server.listen(3000, () => {
    console.log('الخادم يعمل على http://localhost:' + port);
});