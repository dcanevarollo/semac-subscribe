import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import { schema } from '@ioc:Adonis/Core/Validator';

export default class CategoryValidator {
  constructor(private ctx: HttpContextContract) {}

  public schema = schema.create({
    name: schema.string(),
  });

  public cacheKey = this.ctx.routeKey;

  public messages = {
    required: 'O campo {{ name }} é obrigatório',
  };
}
