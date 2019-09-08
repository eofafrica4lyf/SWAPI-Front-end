const express = require('express');
// const serveStatic = require("serve-static")
// const path = require('path');
const port = process.env.PORT || 8500;
const app = express();

// app.use(serveStatic(path.join(__dirname, 'public')));



//Handle production. Make sure this is below the route just above
// if(process.env.NODE_ENV === 'production'){
  //Static folder
  app.use(express.static(__dirname + '/dist'));

  //Handle SPA
  app.get(/.*/, (req,res) => res.sendFile(__dirname + '/dist/index.html'))
// }

app.listen(port);
