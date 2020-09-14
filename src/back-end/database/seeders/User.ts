import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import Env from '@ioc:Adonis/Core/Env';
import User from 'App/Models/User';

export default class UserSeeder extends BaseSeeder {
  public async run() {
    await User.firstOrCreate(
      { cpf: '471.011.208-81' },
      {
        name: 'Douglas Armando Cabrelli Canevarollo',
        email: 'douglascanevarollo@gmail.com',
        password: Env.get('ADMIN_USER_PASSWORD', '1234') as string,
        cpf: '471.011.208-81',
        isAdmin: true,
      },
    );
  }
}
