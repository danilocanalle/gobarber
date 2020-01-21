import User from '../models/User';

class ProviderController {
  async index(req, res) {
    const providers = await User.find(
      {
        provider: true,
      },
      'name email avatar_id'
    ).populate('avatar', 'path url');

    return res.json(providers);
  }
}

export default new ProviderController();
