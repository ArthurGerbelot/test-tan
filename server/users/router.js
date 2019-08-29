const express = require('express');
const router = express.Router();


router.use((req, res, next) => {
  console.log("User Directory");
  next();
});
router.get('/new', (req, res, next) => {
  res.send('<h1>Hello New user</h1>');
});
router.get('/verify-token', (req, res, next) => {
  res.json({success: true, user: {name: "Tan"}});
});

module.exports = router;