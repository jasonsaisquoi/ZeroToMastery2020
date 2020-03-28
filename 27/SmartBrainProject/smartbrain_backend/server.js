const bcryptjs = require('bcryptjs');
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const knex = require('knex')

const image = require('./controllers/image');
const profile = require('./controllers/profile');
const register = require('./controllers/register');
const signin = require('./controllers/signin');

const db = knex({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: 'jserafi',
    password: '',
    database: 'smart-brain'
  }
});

const app = express();
app.use(bodyParser.json());
app.use(cors());


//get all users;
app.get('/', (req, res) => {
  db.select('*').from('users').then(data => {
    res.json(data);
  });
})

app.post('/signin', (req,res) => {
  signin.handleSignin(req,res,db, bcryptjs)
});

app.post('/register', (req,res) => {
  register.handleRegister(req,res,db,bcryptjs)
});

app.get('/profile/:id', (req, res) => {
  profile.handleProfileGet(req,res,db)
})

app.put('/image', (req, res) => {
  image.handleImage(req,res,db);
});

/*
/ --> res = this is working
/signin --> POST = success/fail
/register --> POST = user
/profile/:id --> GET = user
/image --> PUT --> user
*/

app.listen(4000, () => {
  console.log('App is runnning on port 4000')
});