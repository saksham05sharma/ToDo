const express = require('express');
const bodyParser = require('body-parser');
const path = require('path'); // Ensure the 'path' module is required
const { PORT } = require('./config/index');
const auth = require('./routes/auth');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // For parsing form data

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/auth', auth);

app.get('/', (req, res) => {
    res.redirect('/auth');
});

app.listen(PORT, () => {
    console.log(`Server is started on the port ${PORT}`);
});
