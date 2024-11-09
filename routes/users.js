var express = require('express');
const { doLogin, doSignup, getData } = require('../Controllers/userController');
const verifyUser = require('../middleware/auth');
var router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  console.log("This is user")
})

router.post('/login', doLogin)
router.post('/signup', doSignup)
router.get('/getData', verifyUser, getData)

module.exports = router;
