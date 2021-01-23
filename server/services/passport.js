const passport = require('passport');
const mongoose = require('mongoose');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('../config/devKeys');

// Mongoose User model instance
const User = mongoose.model('users');

// Serialize user function
// encryptar el token de usuario en la cookie
passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(user => {
            done(null, user);
        });
});


// Google authentication flow
// Instancia de Google Startegy Authentication
passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback',
        proxy: true
    },
        // Funcion callback se ejecuta en el momento en que google redirige a nuestro server
        // Profile contiene toda la informacion del usuario
        // accessToken es el token que provee google para verificar que tenemos permisos
        // refreshToken es el token que renueva el access token ya que caduca
        // Parámetro done verifica el callback final
        async (accessToken, refreshToken, profile, done) => {
            const userExists = await User.findOne({ googleId: profile.id });
            if (userExists) {
                // Si encuentro usuario returno done
                // done toma 2 argumentos, el primer es un posible error
                // el segundo es el usuario que recuperamos de la base de datos
                return done(null, userExists);
            }
            // Sino existe usuario, creamos un usuario nuevo
            const user = await new User({ googleId: profile.id }).save();
            done(null, user);
        }

    )
);
