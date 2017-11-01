'use strict';
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
// const middleware = require('./middleware');
// const routes = require('./routes');

const test = 'WOW'

const app = express();

app.use(express.static(__dirname + '/../public/dist'))
app.use(bodyParser.urlencoded({extended: true}));

/*================*\
||     DRINKS     ||
\*================*/
app.get('/drinks', function(req, res) {
  res.redirect('./')
})                      
app.get('/drinks/:name', function(req, res) {
  res.send('ONE DRINK')
}) 
app.get('/drinks/:name/creator', function(req, res) {
  res.send('Who made this drink?')
}) 

app.post('/drinks/:name', function(req, res) {
  res.send('You made a new drink')
}) 

/*===============*\
||     USERS     ||
\*===============*/
app.get('/users', function(req, res) {
  res.send('ALL USERS')
}) 
app.get('/users/:username', function(req, res) {
  res.send('ONE USER')
}) 
app.get('/users/:username/creations', function(req, res) {
  res.send('What drinks have this person made?')
}) 

/*================*\
||     BRANDS     ||
\*================*/
app.get('/brands', function(req, res) {
  res.send('ALL BRANDS')
}) 
app.get('/brands/:name', function(req, res) {
  res.send('The brand\'s store page')
}) 
app.get('/brands/:name/drinks', function(req, res) {
  res.send('What drinks recomend this brand?')
}) 


// app.use(middleware.morgan('dev'));
// app.use(middleware.cookieParser());
// app.use(middleware.bodyParser.urlencoded({extended: false}));
// app.use(middleware.bodyParser.json());

// app.use(middleware.auth.session);
// app.use(middleware.passport.initialize());
// app.use(middleware.passport.session());

// app.set('views', __dirname + '/views');
// app.set('view engine', 'jsx');

// app.use('/', );
// app.use('/api', routes.api);

//temporary location for s3 upload route, refactor soon
// app.use('/s3', require('react-dropzone-s3-uploader/s3router')({
//   bucket: 'qraft-uploads',
//   ACL: 'public-read'
// }));
// app.configure(function() {
//     app.use('/favicon.ico', express.static(__dirname + '/../public/dist/favicon.ico'));
// });

// Serve static files
app.get('*/bundle.js', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/../public/dist/bundle.js'));
});
// app.get('*/favicon.ico', (req, res) => {
//   res.sendFile(path.resolve(__dirname + '/../public/dist/icon.png'));
// });
// app.get('*/manifest.json', (req, res) => {
//   res.sendFile(path.resolve(__dirname + '/../public/dist/manifest.json'));
// });
app.get('/*', (req, res) => {
  res.redirect('/');
});


module.exports = require('http').Server(app);