import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Login from 'App/Services/Auth/Login';
import LoginValidator from 'App/Validators/LoginValidator';

export default class AuthController {
  public async login({ request, response, auth }: HttpContextContract) {
    const { cpf, password } = await request.validate(LoginValidator);

    const service = new Login(cpf, password, auth);

    const authObj = await service.execute();

    return response.accepted(authObj);
  }

  public async logout({ response, auth }: HttpContextContract) {
    await auth.logout();

    return response.ok(null);
  }
}
