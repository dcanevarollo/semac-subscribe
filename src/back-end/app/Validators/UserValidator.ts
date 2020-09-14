import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import { schema, rules } from '@ioc:Adonis/Core/Validator';

export default class UserValidator {
  constructor(private ctx: HttpContextContract) {}

  public schema = schema.create({
    name: schema.string({ trim: true }),
    email: schema.string({}, [rules.email({ sanitize: true })]),
    password: schema.string({}, [rules.minLength(4)]),
    cpf: schema.string({}, [rules.regex(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/)]),
    is_admin: schema.boolean.optional(),
  });

  public cacheKey = this.ctx.routeKey;

  public messages = {
    required: 'O campo {{ field }} é obrigatório.',
    unique: 'O {{ field }} já foi cadastrado.',
    'email.email': 'Forneça um e-mail válido.',
    'password.minLength': 'A senha deve conter, no mínimo, 4 caracteres',
    'cpf.regex': 'Forneça um CPF válido.',
  };
}
