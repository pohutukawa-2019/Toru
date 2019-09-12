const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getTruthById,
  getDareById,
  getDeerById
}

function getTruthById (id, db = connection) {
  return db('truth')
    .where('id', id).first()
}

function getDareById (id, db = connection) {
  return db('dare')
    .where('id', id).first()
}

function getDeerById (id, db = connection) {
  return db('deer')
    .where('id', id).first()
}