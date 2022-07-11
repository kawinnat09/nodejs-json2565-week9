const http = require('http')
const msg = require('./message.js')
const {loadVnl2022} = require('./vnl2022_model')
const {loadUser}  = require('./user_models')

const host = "localhost"
const PORT = process.env.PORT || 5000

const server = http.createServer((req, res) => {
    const JsonUser = JSON.stringify(loadUser())
    const JsonVnl2022 = JSON.stringify(loadVnl2022())
    
    if(req.url === '/'){
        res.writeHead(200, { 'Content-Type':'text/plain' })
        res.write(`${msg}`)
    }
    else if(req.url === '/user'){
        res.writeHead(200, { 'Content-Type':'text/plain' })
        res.write(`${JsonVnl2022}`)
    }
    else if(req.url === '/vnl2022'){
        res.writeHead(200, { 'Content-Type':'text/plain' })
        res.write(`${JsonUser}`)
    }
    res.end()
})

server.listen(PORT, () => {
    console.log(`Strat server running at http://${host}:${PORT}`)
})