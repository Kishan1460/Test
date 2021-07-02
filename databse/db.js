require('../.env');
const mongoose = require('mongoose');

mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})