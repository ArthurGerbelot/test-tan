const express = require('express');
const router = express.Router();

const routerUser = require('./users/router');
const routerProject = require('./projects/router');


// Private middleware check
const isPrivate = (req, res, next) => {
  if (/* My Token is valid ? */ true) {
    next();
  }
  throw new Error("Not auth");
}

router.use(express.static('public'));
router.get('/', (req, res, next) => {
  res.sendFile('./public/index.html');
});

router.use('/users', isPrivate, routerUser);
router.use('/projects', routerProject);


router.use((req, res, next) => {
  res.send('<h1>404 Not found</h1>');
})
router.use((err, req, res, next) => {
  res.status(500).send(`<h1>Error ! ${err.message} </h1>`);
})



module.exports = router;