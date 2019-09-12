exports.up = (knex) => {
  return knex.schema.createTable('truth', (table) => {
    table.increments('id').primary()
    table.string('truth_prompt')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('truth')
}
