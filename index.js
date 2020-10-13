const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', (req,res) => res.render('index', {
    title : 'Member app',
}))

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('./views/'));

mongoose.connect('mongodb://localhost:27017/tst');
mongoose.connection.once('open', () => console.log('connection made'));

app.use('/api/members', require('./routes/api/members'));
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))