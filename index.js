const http = require('http');
const fs = require('fs');
const path = require('path');

const port = process.env.PORT || 8082;

const server = http.createServer((req, res) => {
  // Set content type to JSON
  res.setHeader('Content-Type', 'application/json');
  
  // Read the db.json file
  fs.readFile(path.join(__dirname, 'db.json'), (err, data) => {
    if (err) {
      // If error reading file, return 500 Internal Server Error
      res.writeHead(500);
      res.end(JSON.stringify({ error: 'Internal Server Error' }));
      return;
    }

    // If file read successfully, return contents of db.json
    res.writeHead(200);
    res.end(data);
  });
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
