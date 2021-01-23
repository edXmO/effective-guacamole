const passport = require('passport');

module.exports = app => {
    // Route handler para redirigir el login de usuario con google
    // a google, scope especifica el alcance de datos que tenemos acceso en el perfil del usuario
    app.get(
        '/auth/google',
        passport.authenticate('google', {
            scope: ['profile', 'email']
        })
    )

    // Callback handler, de vuelta de google a nuestro servidor
    // Falta añadir como tercer argumento, la respuesta del calback 
    // redirigiendo a pagina principal tras el logueado de usuario
    app.get('/auth/google/callback', passport.authenticate('google'));

    // Logout route handler
    app.get('/api/logout', (req, res) => {
        req.logout();
        res.redirect('http://localhost:5000/api/current_user');
    });

    // Test
    // Current user logged in 
    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });
}