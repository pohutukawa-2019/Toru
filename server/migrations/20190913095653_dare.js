exports.up = (knex) => {
  return knex.schema.createTable('dare', (table) => {
    table.increments('id').primary()
    table.string('dare_prompt')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('dare')
}
