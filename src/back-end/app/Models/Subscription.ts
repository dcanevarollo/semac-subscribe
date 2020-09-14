import { DateTime } from 'luxon';
import {
  column,
  BaseModel,
  computed,
  belongsTo,
  BelongsTo,
  manyToMany,
  ManyToMany,
} from '@ioc:Adonis/Lucid/Orm';
import Category from './Category';
import Minicourse from './Minicourse';
import User from './User';

export default class Subscription extends BaseModel {
  @column({ isPrimary: true })
  public id: string;

  @column({ serializeAs: null })
  public userId: string;

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>;

  @column({ serializeAs: null })
  public categoryId: string;

  @belongsTo(() => Category)
  public category: BelongsTo<typeof Category>;

  @column()
  public github?: string;

  @computed({ serializeAs: 'github_link' })
  public get githubLink() {
    if (!this.github) return;

    return `https://github.com/${this.github}`;
  }

  @column()
  public linkedin?: string;

  @computed({ serializeAs: 'linkedin_link' })
  public get linkedinLink() {
    if (!this.linkedin) return;

    return `https://www.linkedin.com/in/${this.linkedin}`;
  }

  @column()
  public otherLink?: string;

  @column()
  public allowsSharing: boolean;

  @column.dateTime({ autoCreate: true, serializeAs: null })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true, serializeAs: null })
  public updatedAt: DateTime;

  @manyToMany(() => Minicourse)
  public minicourses: ManyToMany<typeof Minicourse>;
}
