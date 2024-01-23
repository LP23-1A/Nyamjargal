import mongoose from "mongoose";
import bcrypt from "bcrypt";
const UserSchema = new mongoose.Schema({
  username: {type: String,
            unique: true},
  password: String,
  avatarImage: Buffer,
});

const UserModel = mongoose.model("User", UserSchema);

export { UserModel };
