import { AuthContract } from '@ioc:Adonis/Addons/Auth';
import Database from '@ioc:Adonis/Lucid/Database';
import User from 'App/Models/User';

interface SubscriptionData {
  category_id: string;
  github?: string;
  linkedin?: string;
  other_link?: string;
  allows_sharing: boolean;
}

interface UserData {
  name: string;
  email: string;
  password: string;
  cpf: string;
}

export default class StoreSubscription {
  constructor(
    private subs: SubscriptionData,
    private user: UserData,
    private minicoursesIds: string[],
    private auth: AuthContract,
  ) {}

  async execute() {
    const response = await Database.transaction(async () => {
      const user = await User.create(this.user);

      const subscription = await user.related('subscription').create(this.subs);

      await subscription.related('minicourses').attach(this.minicoursesIds);

      await user
        .related('tokens')
        .query()
        .where('type', 'opaque_token')
        .delete();

      const token = await this.auth.login(user);

      await user.preload('subscription', (query) => {
        query.select('id');
      });

      return { token, user };
    });

    return response;
  }
}
