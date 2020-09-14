import { AuthContract } from '@ioc:Adonis/Addons/Auth';
import User from 'App/Models/User';

export default class Login {
  constructor(
    private cpf: string,
    private password: string,
    private auth: AuthContract,
  ) {}

  async execute() {
    const user = await User.findBy('cpf', this.cpf);

    await user
      ?.related('tokens')
      .query()
      .where('type', 'opaque_token')
      .delete();

    const token = await this.auth.attempt(this.cpf, this.password);

    await user?.preload('subscription', (query) => {
      query.select('id');
    });

    return { token, user };
  }
}
