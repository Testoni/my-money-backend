module.exports = (req, res, next) => {
    res.header('Acces-Control-Allow-Origin', '*')
    res.header('Acces-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.header('Acces-Control-Allow-Headers', 'Origin, X-Request-With, Content-Type, Accept')
    next()
}