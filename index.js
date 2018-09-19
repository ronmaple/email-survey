const express = require('express')
const app = express();

app.get('/', (req, res) => {
    res.send({ hello: 'hello' })
})

let PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`App listening on port: ${PORT}`)
})
