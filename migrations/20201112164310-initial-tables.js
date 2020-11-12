'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db, callback) {
  console.log('Building tables...')
  db.createTable('users', {
    id: { 
      type: 'int',
      primaryKey: true,
      autoIncrement: true
    },
    email: 'string',
    password: 'string',
    first_name: 'string',
    last_name: 'string',
    Created: 'date',
    Modified: 'date',
  }, callback);
};

exports.down = function(db) {
  return db.runSql(`DROP TABLE users`);
};

exports._meta = {
  "version": 1
};
