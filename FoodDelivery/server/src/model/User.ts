import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
  name: {type: String,
        length: {
          min: 2,
        },
        required: true,
        unique: true,
      },
  email: {
    type: String,
    unique: true
  },
  password: String,
  email: String,

  avatarImage: Buffer,
});

const UserModel = mongoose.model("User", UserSchema);

export { UserModel };
