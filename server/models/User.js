const mongoose = require('mongoose');
// Sacamos la propiedad Schema de la instancia de mongoose:

const { Schema } = mongoose;

// Schema de usuario

const userSchema = new Schema({
    googleId: String
});

mongoose.model('users', userSchema);

