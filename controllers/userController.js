const USER = require('../models/usermodel')
const BOOKS = require('../models/books')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const doSignup = (req, res, next) => {
    console.log(req.body)

    const saltRounds = 10;
    bcrypt.hash(req.body.password, saltRounds)
        .then((hash) => {
            console.log(req.body.password, hash)
            const doc = {
                name: req.body.fullname,
                email: req.body.email,
                password: hash,
                mob: req.body.mob
            }
            USER(doc)
                .save()
                .then((result) => {
                    res.status(200).json("Signup Successfully")
                })
                .catch((err) => {
                    console.log(err)
                    next(err)
                })
        })
        .catch((err) => {
            next(err);
        })
}

const doLogin = async (req, res, next) => {
    try {
        console.log(req.body)
        const { email, password } = req.body
        const userData = await USER.findOne({ email: email })
        console.log(userData)
        if (userData) {
            bcrypt.compare(password, userData.password)
                .then((match) => {
                    console.log({ match })
                    if (match) {
                        // res.status(200).json({ message: "Login Successfully" })
                        // res.status(200).json(req.body)
                        const token = jwt.sign({
                            id: userData._id,
                            name: userData.name,
                            email: userData.email
                        }, process.env.JWT_PASS, { expiresIn: "1d" })
                        res.status(200).json({ message: "Login Successfully", token: token })
                    } else {
                        res.status(403).json({ message: "Invalid Credientials" })
                    }
                })
        } else {
            res.status(403).json({ message: "Invalid Credientials" })
        }
    } catch (err) {
        console.log(err)
    }
}

const getData = (req, res, next) => {
    console.log("getData - book")
    BOOKS.find().limit(100)
        .then((result) => {
            res.status(200).json(result)
        })
}

module.exports = { doSignup, doLogin, getData }
