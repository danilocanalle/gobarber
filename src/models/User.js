import moongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const UserSchema = new moongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
    index: { unique: true },
  },
  password: String,
  provider: Boolean,
});

async function preSave(next) {
  const user = this;

  if (!user.password || !user.isModified('password')) return next();

  user.password = await bcrypt.hash(user.password, 8);

  return next();
}

async function checkPassword(password) {
  return bcrypt.compare(password, this.password);
}

UserSchema.pre('save', preSave);
UserSchema.method('checkPassword', checkPassword);

module.exports = moongoose.model('User', UserSchema);
