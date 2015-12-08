# firenze-adapter-sqlite3

[![Build Status](https://secure.travis-ci.org/fahad19/firenze-adapter-sqlite3.png?branch=master)](http://travis-ci.org/fahad19/firenze-adapter-sqlite3) [![npm](https://img.shields.io/npm/v/firenze-adapter-sqlite3.svg)](https://www.npmjs.com/package/firenze-adapter-sqlite3) [![Join the chat at https://gitter.im/fahad19/firenze](https://img.shields.io/badge/gitter-join_chat_%E2%86%92-1dce73.svg)](https://gitter.im/fahad19/firenze)

> SQLite 3 adapter for [firenze.js](https://github.com/fahad19/firenze) ORM

Install it with [npm](https://www.npmjs.com):

```
$ npm install --save firenze firenze-adapter-sqlite3
```

## Usage

```js
var f = require('firenze');
var Database = f.Database;
var SqliteAdapter = require('firenze-adapter-sqlite3');

var db = new Database({
  adapter: SqliteAdapter,
  filename: './path/to/my.db'
});
```

## Testing

Tests are written with [mocha](http://mochajs.org/), and can be run via this command:

```
$ npm test
```

## License

MIT © [Fahad Ibnay Heylaal](http://fahad19.com)
