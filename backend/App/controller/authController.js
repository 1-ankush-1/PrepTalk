const login = (req, res, next) => {
    res.status(200).send("login route");
}

const register = (req, res, next) => {
    res.status(200).send("register route");
}

const authController = {
    login,
    register
}

export default authController;