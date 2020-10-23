const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = requrie('path');

global.App = module.exports=express();
const router = require('./routes');

app.use(express.static(path.join(/home/arnold/internal-projects)))
app.use(bodyParser.json());
app.use(cors());
app.use('/internal-projects', router);
app.set('tokensample','#');
const port = process.env.PORT || 8000;
app.listen(port);
console.log('Server Running on Port' + port);
