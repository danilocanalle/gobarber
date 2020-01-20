import * as Yup from 'yup';
import User from '../models/User';

// index, show, store, update, destroy

class UserController {
  async index(req, res) {
    const users = await User.find();

    return res.json(users);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string()
        .required()
        .min(6),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const userExists = await User.findOne({ email: req.body.email });

    if (userExists) {
      return res.status(400).json({ error: 'User already exists.' });
    }

    const { _id, name, email, provider } = await User.create(req.body);

    return res.json({
      id: _id,
      name,
      email,
      provider,
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      oldPassword: Yup.string().min(6),
      password: Yup.string()
        .min(6)
        .when('oldPassword', (oldPassword, field) =>
          oldPassword ? field.required() : field
        ),
      confirmPassword: Yup.string().when('password', (password, field) =>
        password ? field.required().oneOf([Yup.ref('password')]) : field
      ),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { email, oldPassword, password, name } = req.body;

    const user = await User.findOne({ _id: req.userId });

    if (!user) {
      return res.status(400).json({ error: 'Invalid user id.' });
    }

    if (name && name !== user.name) {
      user.name = name;
    }

    if (email && email !== user.email) {
      const userExists = await User.findOne({ email });

      if (userExists) {
        return res.status(400).json({ error: 'Email already exists.' });
      }

      user.email = email;
    }

    if (oldPassword && password) {
      if (!(await user.checkPassword(oldPassword)))
        return res.status(401).json({ error: 'Password does not match' });

      user.password = password;
    }

    user.save();

    // eslint-disable-next-line no-undef
    const { provider } = user;

    return res.json({
      id: req.userId,
      name,
      email,
      provider,
    });
  }

  // async destroy(req, res) {}
}

export default new UserController();
