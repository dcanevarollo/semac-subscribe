import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class Minicourses extends BaseSchema {
  protected tableName = 'minicourses';

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary().defaultTo(this.raw('uuid_generate_v4()'));
      table.string('name').notNullable();
      table.integer('vacancies').notNullable();
      table.timestamps(true);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
