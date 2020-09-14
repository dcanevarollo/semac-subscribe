import { DateTime } from 'luxon';
import Hash from '@ioc:Adonis/Core/Hash';
import {
  BaseModel,
  column,
  beforeSave,
  hasMany,
  HasMany,
  hasOne,
  HasOne,
} from '@ioc:Adonis/Lucid/Orm';
import ApiToken from './ApiToken';
import Subscription from './Subscription';

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: string;

  @column()
  public name: string;

  @column()
  public email: string;

  @column({ serializeAs: null })
  public password: string;

  @column()
  public rememberMeToken?: string;

  @column()
  public cpf: string;

  @column()
  public isAdmin: boolean;

  @column.dateTime({ autoCreate: true, serializeAs: null })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true, serializeAs: null })
  public updatedAt: DateTime;

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) user.password = await Hash.make(user.password);
  }

  @hasMany(() => ApiToken)
  public tokens: HasMany<typeof ApiToken>;

  @hasOne(() => Subscription)
  public subscription: HasOne<typeof Subscription>;
}
