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
      autoIncrement: true,
    },
    email: {
      type: 'string',
      notNull: true,
      unique: true,
    },
    password: {
      type: 'string',
      notNull: true,
      unique: true,
    },
    first_name: 'string',
    last_name: 'string',
    created_at: {
      type: 'date',
      notNull: true,
    },
    modified_at: 'date',
  }, callback);
  console.log('users table built successfully')

  db.createTable('ingredients', {
    id: {
      type: 'int',
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: 'string',
      notNull: true,
    },
    aisle: 'string',
    consitency: 'string',
    unit: 'string',
    score: 'int',
    created_at: {
      type: 'date',
      notNull: true,
    },
  }, callback);
  console.log('ingredients table built successfully')

  db.createTable('recipes', {
    id: {
      type: 'int',
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: 'string',
      notNull: true,
    },
    // misc
    servings: 'int',
    readyInMinutes: 'int',
    sourceName: 'string',
    sourceUrl: 'string',
    spoonacularSourceUrl: 'string',
    healthScore: 'int',
    spoonacularScore: 'int',
    pricePerServing: 'int',
    // category
    cheap: 'boolean',
    dairyFree: 'boolean',
    glutenFree: 'boolean',
    ketogenic: 'boolean',
    lowFodmap: 'boolean',
    sustainable: 'boolean',
    vegan: 'boolean',
    vegetarian: 'boolean',
    veryHealthy: 'boolean',
    whole30: 'boolean',
    created_at: {
      type: 'date',
      notNull: true,
    },
  }, callback);
  console.log('recipes table built successfully')
};

exports.down = function(db, callback) {

  db.dropTable('ingredients', callback);
  db.dropTable('recipes', callback);
  db.dropTable('users', callback);
};

exports._meta = {
  "version": 1
};
