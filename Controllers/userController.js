const USER = require('../Models/userModels')
const BOOK = require('../Models/bookModels')
const jwt = require('jsonwebtoken')

const doLogin = async (req, res, next) => {
    const { password, email } = req.body

    const userData = await USER.findOne({ email: req.body.email }) // DB saved user

    if (userData) {
        console.log('Saved password:', userData.password)
        console.log("New password:", password)

        if (userData.password === password) {
            const token = jwt.sign({
                id: userData._id,
                name: userData.name,
                email: userData.email
            }, process.env.JWT_PASS, { expiresIn: "1h" })
            console.log("Token", token)
            res.status(200).json({message: "Login Successful", token: token })
        } else {
            res.status(403).json("Enter correct password")
            console.log("Incorrect password")
        } 
    } else {
        res.status(403).json("Invalid creadintils")
        console.log("Invalid credientils")
    }

    // console.log(req.body);
}

const doSignup = (req, res, next) => {
    const { fullname, password, mob, email } = req.body

    console.log('Request body:', req.body)
    console.log('Name password', fullname, password)

    const doc = {
        name: fullname,
        email: email,
        mob: mob,
        password: password
    }

    console.log({ doc })

    USER(doc).save()
        .then((result) => {
            console.log(result)
            res.status(200).json("Signup Successfully")
        })
        .catch((err) => {
            console.log(err)
            next(err)
        })

    console.log("Signup successfully")
}

const getData = (req, res, next) => {
    BOOK.find().limit(100)
        .then((result) => {
            res.status(200).json(result)
        })
        .catch((err) => {
            next(err)
        })
}

module.exports = { doLogin, doSignup, getData }  