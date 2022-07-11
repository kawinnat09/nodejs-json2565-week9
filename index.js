const http = require('http')
const msg = require('./message.js')
const {loadUser}  = require('./user_models')
const {loadVnl2022} = require('./vnl2022_model')

const host = "localhost"
const PORT = process.env.PORT || 5000

const server = http.createServer((req, res) => {
    // const JsonContent = JSON.stringify(loadUser())
    const JsonUser = JSON.stringify(loadUser())
    const JsonVnl2022 = JSON.stringify(loadVnl2022())
    
    if(req.url === '/'){
        res.writeHead(200, { 'Content-Type':'text/plain' })
        res.write(`${msg.message}`)
        res.end()
    }
    else if(req.url === '/user'){
        res.writeHead(200, { 'Content-Type':'text/plain' })
        res.write(`${JsonVnl2022}`)
        res.end()
    }
    else if(req.url === '/vnl2022'){
        res.writeHead(200, { 'Content-Type':'text/plain' })
        res.write(`${JsonUser}`)
        res.end()
    }
    else{
        res.writeHead(200, { 'Content-Type':'text/plain' })
        res.write(`404 NOT FOUND`)
        res.end()
    }

})

server.listen(PORT, () => {
    console.log(`Strat server running at http://${host}:${PORT}`)
})