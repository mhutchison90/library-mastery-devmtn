// --IMPORTS--
require('dotenv').config();
const express = require('express')
    , session = require('express-session')
    , bodyParser = require('body-parser')
    , massive = require('massive')
    , passport = require('passport')
    , Auth0Strategy = require('passport-auth0')
    , bookController = require('./controllers/bookController')

const successRedirectVar = '/#/profile';
const failureRedirectVar = '/auth';


// --SETUP APP--
const app = express();
// app.use( express.static( `${__dirname}/../build` ) ); // For When Build is run

app.use(bodyParser.json());
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
}))
//important to have this at top of file
app.use(passport.initialize());
app.use(passport.session());


// --MASSIVE--
massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db);
})

passport.use(new Auth0Strategy({
    domain: process.env.AUTH_DOMAIN,
    clientID: process.env.AUTH_CLIENT_ID,
    clientSecret: process.env.AUTH_CLIENT_SECRET,
    callbackURL: process.env.CALLBACK_URL
}, function (accessToken, refreshToken, extraParams, profile, done) {
    // will make db calls here in the future
    const db = app.get('db')

    
    db.find_user([profile.identities[0].user_id]).then(user => {
        if (user[0]) {
            return done(null, user[0].id)
        } else {
            const user = profile._json;
            db.create_user([user.name, user.email, user.picture, user.identities[0].user_id]).then(user => {
                return done(null, user[0].id)
            })
        }
    })  
}
))

// --ENDPOINTS--
// --AUTH ENDPOINTS--
app.get('/auth', passport.authenticate('auth0'))
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: successRedirectVar,
    failureRedirect:  failureRedirectVar
}))
app.get('/auth/me', (req, res) => {
    if (!req.user) {
        return res.status(404).send('User not found.')
    }
    return res.status(200).send(req.user);
})

app.get('/auth/logout', (req, res) => {
    req.logOut();
    res.redirect(302, '/#/logout')
})

passport.serializeUser(function (id, done) {
    done(null, id);
})
passport.deserializeUser(function (id, done) {
    app.get('db').find_user([id])
        .then(user => {
            done(null, user[0])
        })
})


// --ENDPOINTS--
app.get('/api/getBooks', bookController.getAllBooks);
app.post('/api/addBook', bookController.addBook);
app.get('/api/getBooks/:filter', bookController.searchBooks);
app.delete('/api/boook/delete/:id', bookController.deleteBook);





// --SETUP APP TO LISTEN TO PORT--
const PORT = 3001;
app.listen(PORT, () => console.log(`Listening on ${PORT}`))
