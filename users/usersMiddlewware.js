const users = require("./userDb")

function validateUserId() {
    return (req, res, next) => {
        users.getById(req.params.id)
            .then((user) => {
                if (user) {
                    req.user = user
                    next()
                } else {
                    res.status(404).json({
                        message: "This user is not real bro, I checked."
                    })
                }
            })
            .catch((error) => {
                next(error)
            })
    }
}

function validateUser() {
    return (req, res, next) => {
        if (!req.body.name) {
            return res.status(400).json({
                message: "What's your name tho?",
            })
        }
        next()
    }
}

function validatePost() {
    return (req, res, next) => {
        if (!req.body.text) {
            return res.status(400).json({
                message: "Please write something to post. SMH.",
            })
        }
        next()
    }
}

module.exports = {
    validateUserId,
    validateUser,
    validatePost
}