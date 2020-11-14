const express = require('express');
const app = express();
const path = require('path');

//Settings

app.set('views', path.join(__dirname, '/views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

//midelewares


// routes
app.use(require('./routes/index'));


//static files
app.use(express.static(path.join(__dirname, 'public')));
///listening the server
app.listen(process.env.PORT || 3000);
