const jwt = require('jsonwebtoken')
async function verifyJwt(token) {
    return new Promise(function (resolve, reject) {
        jwt.verify(token,'secretKey', (error, authData) => {
            if (error) {
                reject(error)
            }
            resolve(authData)
        })
    })
}
module.exports = async (req, res, next) => {
    const authHeader = req.headers.authorization
    if (!authHeader) {
        return res.status(401).json({ error: 'access unauthorized' })
    }

    const bearerToken = authHeader.split(' ')[1]
    try {
        const payload = await verifyJwt(bearerToken)
        req.body.id = payload.id
        req.body.username = payload.username
        return next()
    } catch (error) {
        return res
            .status(403)
            .json({ error: 'access forbidden', error: error.message })
    } 
}