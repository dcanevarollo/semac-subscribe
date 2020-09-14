import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Minicourse from 'App/Models/Minicourse';
import MinicourseValidator from 'App/Validators/MinicourseValidator';

export default class MinicoursesController {
  public async index({ response }: HttpContextContract) {
    const minicourses = await Minicourse.all();

    return response.ok(minicourses);
  }

  public async store({ request, response }: HttpContextContract) {
    const data = await request.validate(MinicourseValidator);

    const minicourse = await Minicourse.create(data);

    return response.created(minicourse);
  }

  public async show({ params, response }: HttpContextContract) {
    const { id } = params;

    const minicourse = await Minicourse.findOrFail(id);

    await minicourse.preload('subscriptions', (subscription) => {
      subscription.preload('user');
    });

    return response.ok(minicourse);
  }

  public async update({ params, request, response }: HttpContextContract) {
    const data = await request.validate(MinicourseValidator);

    const { id } = params;

    const minicourse = await Minicourse.findOrFail(id);

    minicourse.merge(data);
    await minicourse.save();

    return response.ok(minicourse);
  }

  public async destroy({ params, response }: HttpContextContract) {
    const { id } = params;

    const minicourse = await Minicourse.findOrFail(id);

    await minicourse.delete();

    return response.ok(null);
  }
}
