import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Subscription from 'App/Models/Subscription';
import DestroySubscription from 'App/Services/Subscriptions/DestroySubscription';
import StoreSubscription from 'App/Services/Subscriptions/StoreSubscription';
import SubscriptionValidator from 'App/Validators/SubscriptionValidator';

export default class SubscriptionsController {
  public async index({ response }: HttpContextContract) {
    const subscriptions = await Subscription.query().preload(
      'user',
      (query) => {
        query.select('name');
      },
    );

    return response.ok(subscriptions);
  }

  public async store({ request, response, auth }: HttpContextContract) {
    const { subs, user, minicourses } = await request.validate(
      SubscriptionValidator,
    );

    const service = new StoreSubscription(subs, user, minicourses, auth);

    const subscription = await service.execute();

    return response.created(subscription);
  }

  public async show({ params, response }: HttpContextContract) {
    const { id } = params;

    const subscription = await Subscription.findOrFail(id);

    await subscription.preload((preloader) => {
      preloader.preload('category').preload('minicourses').preload('user');
    });

    return response.ok(subscription);
  }

  public async destroy({ params, response }: HttpContextContract) {
    const { id } = params;

    const service = new DestroySubscription(id);

    await service.execute();

    return response.ok(null);
  }
}
