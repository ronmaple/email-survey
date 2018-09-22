const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cookieSession = require('cookie-session')
const passport = require('passport')
const keys = require('./config/keys')

// config mongo models
require('./models/User')

// config passport
require('./services/passport')

// mongoose.createConnection(require('./config/keys').mongoURI, { useMongoClient: true })
mongoose.connect(keys.mongoURI)

// configure cookies from passport
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000, // milliseconds convert
        keys: [keys.cookieKey]
    })
)

// initiate cookie handling for authentication
app.use(passport.initialize())
app.use(passport.session())

// routes
require('./routes/authRoutes')(app);


app.get('/', (req, res) => {
    res.send({ hello: 'hello' })
})


let PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`App listening on port: ${PORT}`)
})
