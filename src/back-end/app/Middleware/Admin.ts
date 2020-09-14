import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import NotAllowedException from 'App/Exceptions/NotAllowedException';

export default class Admin {
  public async handle(
    { auth }: HttpContextContract,
    next: () => Promise<void>,
  ) {
    const { user } = auth;

    if (!user?.isAdmin) throw new NotAllowedException();

    await next();
  }
}
