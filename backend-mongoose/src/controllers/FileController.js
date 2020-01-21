/* eslint-disable no-underscore-dangle */
import File from '../models/File';
import User from '../models/User';

class FileController {
  async store(req, res) {
    const { originalname: name, filename: path } = req.file;

    const user = await User.findById(req.userId);

    const file = await File.create({
      name,
      path,
      user_id: user._id,
    });

    user.avatar_id = file._id;
    user.save();

    return res.json(file);
  }
}

export default new FileController();
