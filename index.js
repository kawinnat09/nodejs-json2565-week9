const http = require('http')
const msg = require('./message.js')
const {loadUser}  = require('./user_models')
const {importVnl2022} = require('./data.json')

const host = "localhost"
const PORT = process.env.PORT || 5000

const server = http.createServer((req, res) => {
    //const JsonContent = JSON.stringify(loadUser())

    res.writeHead(200, { 'Content-Type':'text/plain' })
    //res.write(${JsonContent })
    res.write(`${importVnl2022}`)
    res.end()
})

server.listen(PORT, () => {
    console.log(`Strat server running at http://${host}:${PORT}`)
})