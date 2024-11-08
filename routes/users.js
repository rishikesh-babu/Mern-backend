var express = require('express');
const { doSignup, doLogin, getData } = require('../controllers/userController');
const verifyUser = require('../middlewares/auth');
var router = express.Router();

// router.get('/', (req, res, next) => {
//     res.status(200).json("Go to POST /signup")
// })

// router.get('/signup', (req, res, next) => {
//     res.status(200).json("Change to POST METHOD")
// })

router.post('/signup', doSignup)
router.post('/login', doLogin)
router.get('/getData', verifyUser, getData)

module.exports = router;
