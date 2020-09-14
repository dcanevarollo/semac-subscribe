import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class MinicourseSubscriptions extends BaseSchema {
  protected tableName = 'minicourse_subscription';

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table
        .uuid('minicourse_id')
        .references('id')
        .inTable('minicourses')
        .onUpdate('cascade')
        .onDelete('cascade');
      table
        .uuid('subscription_id')
        .references('id')
        .inTable('subscriptions')
        .onUpdate('cascade')
        .onDelete('cascade');
      table.primary(['minicourse_id', 'subscription_id']);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
