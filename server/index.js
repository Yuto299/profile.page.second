const express = require('express');
const app = express();
const PORT = 9000;

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// const express = require('express')
// const app = express()
// app.get('/', function(req, res){
//   res.send('Hello World')
// })
// app.listen(9000, function(){
//   console.log(Server is running on http://localhost:9000)
// })

// node server/index.js
