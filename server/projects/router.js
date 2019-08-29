const express = require('express');
const router = express.Router();


router.use((req, res, next) => {
  console.log("Project directory");
  next();
});
router.get('/new', (req, res, next) => {
  res.send('<h1>Hello World</h1>');
})
router.post('/new', (req, res, next) => {
  res.send('<h1>Post Received</h1>');
})


module.exports = router;