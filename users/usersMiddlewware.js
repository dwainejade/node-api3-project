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
                        message: "This user is not real bro; I checked."
                    })
                }
            })
            .catch((error) => {
                next(error)
            })
    }
}

function validateUser() {
    // do your magic!
}

function validatePost() {
    // do your magic!
}

module.exports = {
    validateUserId,
    validateUser,
    validatePost
}