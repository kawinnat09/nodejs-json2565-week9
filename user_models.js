const {readFileSync} = require('fs')

const loadUser = () => JSON.parse(readFileSync('user.json'))

module.exports = {loadUser}