import { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "Please enter your email"],
      unique: [true, "Email already exists"],
    },
    username: {
      type: String,
      required: [true, "Please enter your username"],
      unique: [true, "Username already exists"],
    },
    image: {
      type: String,
    },
  },
  { timestamp: true }
);

const User = models.User || model("User", UserSchema);
export default User;
