const helmet = require('helmet');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(helmet.hidePoweredBy());
app.use(helmet.frameguard({ action: 'deny' }));

module.exports = app;
const api = require('./server.js');
app.use(express.static('public'));
app.disable('strict-transport-security');
app.use('/_api', api);
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.listen(port, () => {
  console.log(`FreeCodeCamp Test App is running on port ${port}`);
});
