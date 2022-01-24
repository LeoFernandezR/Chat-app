import {Schema, model, Model} from "mongoose"
import bcrypt from "bcryptjs"

interface IUser {
  username: string
  email: string
  password: string
}

interface IUserModel extends Model<IUser> {
  encryptPassword: (password: string) => Promise<string>
  comparePassword: (password: string, receivedPassword: string) => Promise<boolean>
}

const userSchema = new Schema<IUser, IUserModel>(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
)

userSchema.statics.encryptPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(10)
  return await bcrypt.hash(password, salt)
}

userSchema.statics.comparePassword = async (password: string, receivedPassword: string) => {
  return await bcrypt.compare(password, receivedPassword)
}

const User = model<IUser, IUserModel>("User", userSchema)

export default User
