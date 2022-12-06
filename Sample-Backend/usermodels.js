const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
id: {
type: String,
required: true,
},
username: {
type: String,
required: true,
},
password: {
type: String,
required: true,
},
email: {
    type: String,
    required: true,
},
avatar: {
    type: Binary,
    required: true,
},
});
// Mongoose will assume there is a collection called the plural of this name (i.e., 'users' in this case).
const User = mongoose.model("User", UserSchema);
module.exports = User;
