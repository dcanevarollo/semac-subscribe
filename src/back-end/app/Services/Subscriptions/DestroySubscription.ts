import Database from '@ioc:Adonis/Lucid/Database';
import Subscription from 'App/Models/Subscription';

export default class DestroySubscription {
  constructor(private id: string) {}

  async execute() {
    await Database.transaction(async () => {
      const subscription = await Subscription.findOrFail(this.id);

      await subscription.related('user').query().delete();

      await subscription.delete();
    });
  }
}
