import firenze from 'firenze';

import SqliteAdapter from '../';

const firenzeConfig = {
  adapter: SqliteAdapter,
  filename: 'firenze.db',
  pool: {
    min: 0,
    max: 1
  }
};

global.firenze = firenze;
global.firenzeConfig = firenzeConfig;
