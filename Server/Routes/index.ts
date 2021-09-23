import express from 'express';
const router = express.Router();
export default router;
import fs from 'fs';

/* GET home page. */
router.get('/', function(req, res, next) 
{
  res.render('index', { title: 'Home' });
});

/* GET home page. */
router.get('/home', function(req, res, next) 
{
  res.render('index', { title: 'Home' });
});

/* GET about page. */
router.get('/about', function(req, res, next) 
{
  let filePath = 'Public/Assets/pdf/Resume.pdf';
  fs.readFile(filePath, function (err,data){
    res.contentType("application/pdf");
    res.send(data);
  });
});

/* GET projects page. */
router.get('/projects', function(req, res, next) 
{
  res.render('index', { title: 'Projects' });
});

/* GET services page. */
router.get('/services', function(req, res, next) 
{
  res.render('index', { title: 'Services' });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) 
{
  res.render('index', { title: 'Contact' });
});
//module.exports = router;
