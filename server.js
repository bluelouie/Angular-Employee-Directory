const express = require("express");
const app = express();

app.use(express.static(__dirname + '/dist'));

app.all('*', (request, response) => {
    response.status(200).sendfile(__dirname + '/dist/index.html');
});

app.listen(process.env.PORT || 8080);