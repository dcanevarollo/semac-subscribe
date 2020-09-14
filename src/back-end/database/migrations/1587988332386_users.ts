import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class Users extends BaseSchema {
  protected tableName = 'users';

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary().defaultTo(this.raw('uuid_generate_v4()'));
      table.string('name').notNullable();
      table.string('email').notNullable().unique();
      table.string('password', 180).notNullable();
      table.string('remember_me_token');
      table.string('cpf', 14).notNullable().unique();
      table.boolean('is_admin').defaultTo(false);
      table.timestamps(true);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
