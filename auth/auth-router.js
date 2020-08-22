const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = require("express").Router();
const Users = require("../users/users-model.js");
const { isValid } = require("../users/users-service.js");
const constants = require("../config/constants.js");

router.post("/register", (req, res) => {
    const credentials = req.body;

    if (isValid(credentials)) {
        const rounds = process.env.BCRYPT_ROUNDS || 12;

        const hash = bcryptjs.hashSync(credentials.password, rounds);

        credentials.password = hash;

        Users.add(credentials)
            .then(user => {
                res.status(201).json({ data: user });
            })
            .catch(error => {
                res.status(500).json({ message: error.message });
            });
    } else {
        res.status(400).json({
            message:
                "please provide username and password and the password should be alphanumeric",
        });
    }
});

router.post("/login", (req, res) => {
    const { username, password } = req.body;

    if (isValid(req.body)) {
        Users.findBy({ username: username })
            .then(([user]) => {
                if (user && bcryptjs.compareSync(password, user.password)) {
                    const token = signToken(user);

                    res.status(200).json({
                        message: "Welcome to our API",
                        username: user.username,
                        id: user.id,
                        token,
                    });
                } else {
                    res.status(401).json({ message: "Wrong username or password" });
                }
            })
            .catch(error => {
                res.status(500).json({ message: error.message });
            });
    } else {
        res.status(400).json({
            message:
                "please provide username and password and the password shoud be alphanumeric",
        });
    }
});

function signToken(user) {
    const payload = {
        id: user.id,
        username: user.username
    };

    const secret = constants.jwtSecret;

    const options = {
        expiresIn: "1d",
    };

    return jwt.sign(payload, secret, options);
}

module.exports = router;