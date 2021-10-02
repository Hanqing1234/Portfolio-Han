/*
* Author       : Hanqing Liu
* Date         : Sep 20, 2021
*Description   : Assignment 1 for COMP229
*/
import express from 'express';
const router = express.Router();
export default router;
import fs from 'fs';

/* GET home page. */
router.get('/', function(req, res, next) 
{
  res.render('index', { title: 'Home', page: 'home' });
});

/* GET home page. */
router.get('/home', function(req, res, next) 
{
  res.render('index', { title: 'Home', page: 'home' });
});

/* GET about page. */
router.get('/about', function(req, res, next) 
{
  res.render('index', { title: 'About', page: 'about' });
});

/* GET resume page. */
router.get('/resume', function(req, res, next) 
{
  let filePath = 'Client/Assets/pdf/Resume.pdf';
  fs.readFile(filePath, function (err,data){
    res.contentType("application/pdf");
    res.send(data);
  });
});

/* GET projects page. */
router.get('/projects', function(req, res, next) 
{
  res.render('index', { title: 'Projects', page: 'projects' });
});

/* GET services page. */
router.get('/services', function(req, res, next) 
{
  res.render('index', { title: 'Services', page: 'services' });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) 
{
  res.render('index', { title: 'Contact Me', page: 'contact' });
});
//module.exports = router;
