import mongoose from 'mongoose';
const UserSchema = mongoose.Schema({
  firstName: {type: String, require:true},
  lastName: {type: String, require:true},
  email: {type: String, require:true},
  phoneNumber:{type : String, require:true},
  password:{type: String, require:true, }
})
const User = mongoose.model("User", UserSchema);
export default User;