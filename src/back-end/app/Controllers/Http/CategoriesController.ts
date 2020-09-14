import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Category from 'App/Models/Category';
import CategoryValidator from 'App/Validators/CategoryValidator';

export default class CategoriesController {
  public async index({ response }: HttpContextContract) {
    const categories = await Category.all();

    return response.ok(categories);
  }

  public async store({ request, response }: HttpContextContract) {
    const data = await request.validate(CategoryValidator);

    const category = await Category.create(data);

    return response.created(category);
  }

  public async show({ params, response }: HttpContextContract) {
    const { id } = params;

    const category = await Category.findOrFail(id);

    await category.preload('subscriptions', (subscription) => {
      subscription.preload('user');
    });

    return response.ok(category);
  }

  public async update({ params, request, response }: HttpContextContract) {
    const data = await request.validate(CategoryValidator);

    const { id } = params;

    const category = await Category.findOrFail(id);

    category.merge(data);
    await category.save();

    return response.ok(category);
  }

  public async destroy({ params, response }: HttpContextContract) {
    const { id } = params;

    const category = await Category.findOrFail(id);

    await category.delete();

    return response.ok(null);
  }
}
