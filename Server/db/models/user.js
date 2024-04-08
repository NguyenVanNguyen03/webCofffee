import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: String,

    username: String,

    password: String,

});

const Users = mongoose.model("Users", userSchema);

export default Users;
