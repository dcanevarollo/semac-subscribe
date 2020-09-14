import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import User from 'App/Models/User';
import UserValidator from 'App/Validators/UserValidator';

export default class UsersController {
  public async index({ response }: HttpContextContract) {
    const users = await User.all();

    return response.ok(users);
  }

  public async store({ request, response }: HttpContextContract) {
    const data = await request.validate(UserValidator);

    const user = await User.create({ ...data, isAdmin: true });

    return response.created(user);
  }

  public async show({ params, response }: HttpContextContract) {
    const { id } = params;

    const user = await User.findOrFail(id);

    await user.preload('subscription', (subscription) => {
      subscription.preload('category').preload('minicourses');
    });

    return response.ok(user);
  }

  public async update({ params, request, response }: HttpContextContract) {
    const data = await request.validate(UserValidator);

    const { id } = params;

    const user = await User.findOrFail(id);

    user.merge(data);
    await user.save();

    return response.ok(user);
  }

  public async destroy({ params, response }: HttpContextContract) {
    const { id } = params;

    const user = await User.findOrFail(id);

    await user.delete();

    return response.ok(null);
  }
}
