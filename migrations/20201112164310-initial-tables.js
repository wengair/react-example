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
    id: { type: 'int', primaryKey: true, autoIncrement: true },
    name: 'string'  // shorthand notation
  }, callback);
  db.createTable('pets', {
    id: { type: 'int', primaryKey: true, autoIncrement: true },
    name: 'string'  // shorthand notation
  }, callback);
};

exports.down = function(db, callback) {
  db.dropTable('pets', callback);
  db.dropTable('users', callback);
};

exports._meta = {
  "version": 1
};
