import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import { schema, rules } from '@ioc:Adonis/Core/Validator';

export default class CategoryValidator {
  constructor(private ctx: HttpContextContract) {}

  public schema = schema.create({
    name: schema.string(),
    vacancies: schema.number([rules.unsigned()]),
  });

  public cacheKey = this.ctx.routeKey;

  public messages = {
    required: 'O campo {{ name }} é obrigatório',
    'vacancies.unsigned': 'As vagas precisam ser não-negativas',
  };
}
