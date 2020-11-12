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

exports.up = function(db) {
  console.log('Building tables...')
  const engineCharsetCollate = 'ENGINE=InnoDB CHARACTER SET=utf8mb4 COLLATE=utf8mb4_unicode_ci'

  const createUsers = () => db.runSql(`
    CREATE TABLE users (
      id                  INT NOT NULL AUTO_INCREMENT,
      email               VARCHAR(255) NOT NULL,
      password            VARCHAR(255) NOT NULL,
      first_name          VARCHAR(255),
      last_name           VARCHAR(255),
      created             DATETIME NOT NULL,
      modified            DATETIME,
      PRIMARY KEY (id)
    ) ${engineCharsetCollate}
  `)

  return  createUsers()
  .then(console.log('Build users table successfully'))
};

exports.down = function(db) {
  return db.runSql(`DROP TABLE users`);
};

exports._meta = {
  "version": 1
};
