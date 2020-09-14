import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class SubscriptionsSchema extends BaseSchema {
  protected tableName = 'subscriptions';

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary().defaultTo(this.raw('uuid_generate_v4()'));
      table
        .uuid('user_id')
        .references('id')
        .inTable('users')
        .onUpdate('cascade')
        .onDelete('cascade');
      table
        .uuid('category_id')
        .references('id')
        .inTable('categories')
        .onUpdate('cascade')
        .onDelete('cascade');
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
