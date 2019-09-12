exports.up = (knex) => {
  return knex.schema.createTable('deer', (table) => {
    table.increments('id').primary()
    table.string('deer_img')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('deer')
}
