const express = require('express');
const bodyParser = require('body-parser');
const routers = require('./routers/index');
const app = express();

app.use(express.json());
app.use('/', routers);
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:false}));

const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`server is runing in ${port}`));