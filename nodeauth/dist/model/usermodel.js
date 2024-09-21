import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    authentication: {
        password: { type: String, required: true, select: false },
        salt: { type: String, select: false },
        sessionToken: { type: String, select: false },
    },
});
export const userModel = mongoose.model('User', UserSchema);
export const getUsers = () => userModel.find();
export const getUsersByEmail = (email) => userModel.findOne({ email });
export const getUsersBySessionToken = (sessionToken) => userModel.findOne({
    'authentication.sessionToken': sessionToken
});
export const getUserById = (id) => userModel.findById(id);
export const createUser = (values) => new userModel(values).save().then((user) => user.toObject());
export const deleteUserById = (id) => userModel.findOneAndDelete({ _id: id });
export const updateUsersById = (id, values) => userModel.findByIdAndUpdate(id, values);
//# sourceMappingURL=usermodel.js.map