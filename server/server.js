const express = require('express')
const app = express()
var port = process.env.PORT || 7229

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Soduko listening on port ${port}!`))