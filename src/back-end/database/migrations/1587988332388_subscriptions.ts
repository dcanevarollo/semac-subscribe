import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class SubscriptionsSchema extends BaseSchema {
  protected tableName = 'subscriptions';

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary().defaultTo(this.raw('uuid_generate_v4()'));
      table
        .uuid('category_id')
        .references('id')
        .inTable('categories')
        .onUpdate('cascade')
        .onDelete('cascade');
      table.string('name').notNullable();
      table.string('email').notNullable().unique();
      table.string('password', 180).notNullable();
      table.string('remember_me_token');
      table.string('cpf', 14).notNullable().unique();
      table.string('github', 100);
      table.string('linkedin', 100);
      table.string('other_link');
      table.boolean('allows_sharing').defaultTo(false);
      table.timestamps(true);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
