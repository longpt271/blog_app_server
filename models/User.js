import { Schema, model } from "mongoose";
import { hash } from "bcryptjs";

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

// pre: func sẽ chạy trước khi user được 'save'
UserSchema.pre("save", async function (next) {
  // this có nghĩa là các giá trị nhận vào body khi lưu user
  if (this.isModified("password")) {
    // mã hóa lại dữ liệu
    this.password = await hash(this.password, 10);
    return next();
  }
  return next();
});

const User = model("User", UserSchema);

export default User;
