import mongoose, { /*Document,*/ Schema } from "mongoose";

// 1. Creates an interface representing a document in MongoDB.
export interface IUser {
    username: string;
    email: string;
    googleId: string;

}

// 2. Creates a Schema corresponding to the document interface.
const userSchema = new Schema<IUser>({
    username: String,
    email: String,
    googleId: String,
});

// 3. Create a model
const User = mongoose.model<IUser>("User", userSchema);

export default User;