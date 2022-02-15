const { Pool } = require('pg');
require('dotenv').config();

const PG_URI =
  'postgres://bnljocie:iEtPtzgMOhYXjSI8HeUMe4dDKFV_KZcR@castor.db.elephantsql.com/bnljocie';

const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
