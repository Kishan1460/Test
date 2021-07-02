const express = require('express');
const app = express();
const port = process.env.PORT || 4500;
require('./databse/db');

app.use(express.json());
app.use('/',require('./router/user'));

app.listen(port,() => {
    console.log(`Server is up on port ${port}`);
});