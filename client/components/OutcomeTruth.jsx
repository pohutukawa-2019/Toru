import React from 'react'
const knex = require('knex')
const config = require('./knexfile').development
const conn = knex(config)

function OutcomeTruth (id) {
  return conn('truth').select()
    .where('id', id).first()
}

export default OutcomeTruth
