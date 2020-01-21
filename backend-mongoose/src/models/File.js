/* eslint-disable no-underscore-dangle */
import moongoose from 'mongoose';

const FileSchema = new moongoose.Schema(
  {
    name: {
      type: String,
    },
    path: {
      type: String,
    },
    user_id: {
      type: moongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      versionKey: false,
      transform(doc, ret) {
        delete ret._id;
      },
    },
  }
);

const virtualUser = {
  ref: 'User',
  localField: 'user_id',
  foreignField: '_id',
  justOne: true,
};

function virtualUrl() {
  return `http://localhost:3333/files/${this.path}`;
}

FileSchema.virtual('url').get(virtualUrl);
FileSchema.virtual('user', virtualUser);

module.exports = moongoose.model('File', FileSchema);
