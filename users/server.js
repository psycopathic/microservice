import http from 'http';
import index from './index.js';

const server = http.createServer(index);


server.listen(3001, () => {
  console.log('Server is running on port 3001');
});