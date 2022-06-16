const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials');

// Servir static content
app.use( express.static('public') )

app.get('/', ( req, res ) => {
  res.render('home', {
    title: 'Node Course',
    name: 'Bosti',
    desc: 'This is Node'
  });
})

app.get('/generic', ( req, res ) => {
  res.render('generic', {
    title: 'Generic | Node',
    name: 'Bosti',
    desc: 'This is Generic',
    date: '06/16/2022'
  });
})

app.get('/elements', ( req, res ) => {
  res.render('elements', {
    title: 'Elements |--| Node',
    name: 'Bosti',
    desc: 'This is Elements'
  });
})

app.get('/*', ( req, res ) => {
  res.render('404');
})

app.listen(port, () => {
  console.log(`Example app listening: http://localhost:${ port }/`);
})