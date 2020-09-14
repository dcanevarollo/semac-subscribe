import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import { schema, rules } from '@ioc:Adonis/Core/Validator';

export default class SubscriptionValidator {
  constructor(private ctx: HttpContextContract) {}

  public schema = schema.create({
    subs: schema.object().members({
      category_id: schema.string({}, [
        rules.uuid({ version: 4 }),
        rules.exists({ table: 'categories', column: 'id' }),
      ]),
      github: schema.string.optional(),
      linkedin: schema.string.optional(),
      other_link: schema.string.optional(),
      allows_sharing: schema.boolean(),
    }),
    user: schema.object().members({
      name: schema.string({ trim: true }),
      email: schema.string({}, [
        rules.email({ sanitize: true }),
        rules.unique({ table: 'users', column: 'email' }),
      ]),
      password: schema.string({}, [rules.minLength(4)]),
      cpf: schema.string({}, [
        rules.regex(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/),
        rules.unique({ table: 'users', column: 'cpf' }),
      ]),
    }),
    minicourses: schema
      .array([rules.minLength(0), rules.maxLength(2)])
      .members(
        schema.string({}, [
          rules.uuid({ version: 4 }),
          rules.exists({ table: 'minicourses', column: 'id' }),
        ]),
      ),
  });

  public cacheKey = this.ctx.routeKey;

  public messages = {
    required: 'O campo {{ field }} é obrigatório',
    uuid: 'Forneça um id válido.',
    'subs.category_id.exists': 'Categoria não encontrada.',
    unique: 'O {{ field }} já foi cadastrado.',
    'email.email': 'Forneça um e-mail válido.',
    'password.minLength': 'A senha deve conter, no mínimo, 4 caracteres',
    'cpf.regex': 'Forneça um CPF válido.',
    'minicourses.array': 'Forneça minicursos válidos.',
  };
}
