import { Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
    avatar: { type: String, default: "" },
    name: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    verified: { type: Boolean, default: false },
    verificationCode: { type: String, require: false },
    admin: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const User = model("User", UserSchema);

export default User;
