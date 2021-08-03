import mongoose from 'mongoose';

 
const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
    },
    hashed_password: { type: String },
    first_name: { type: String },
    last_name: { type: String }
  },
  { timestamps: true },
);
 
userSchema.statics.findByLogin = async function (login) {
  let user = await this.findOne({
    id: login,
  });
 
  if (!user) {
    user = await this.findOne({ email: login });
  }
 
  return user;
};
 
userSchema.pre('remove', function(next) {
  this.model('Message').deleteMany({ user: this._id }, next);
});
 
const User = mongoose.model('User', userSchema);
 
export default User;