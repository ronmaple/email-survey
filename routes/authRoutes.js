const passport = require('passport')

module.exports = app => {
    app.get('/auth/google',
        passport.authenticate('google', {
            scope: ['profile', 'email']
        })
    )

    app.get('/auth/google/callback',
        passport.authenticate('google')
    )

    app.get('/api/logout', (req, res) => {
        req.logout()
        res.send(req.user)
    })

    // route handler to inspect req.user property from authentication
    app.get('/api/current_user', (req, res) => {
        res.send(req.user) // returns { _id, googleId }
    })

}

