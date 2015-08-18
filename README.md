# digs-example [![NPM](https://nodei.co/npm/digs-example.png?compact=true)](https://www.npmjs.com/package/digs-example)  
[![Build Status](https://travis-ci.org/digsjs/digs-example.svg?branch=master)](https://travis-ci.org/digsjs/digs-example) [![Join the chat at https://gitter.im/digsjs/digs](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/digsjs/digs?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

> Canonical example of a custom Digs server

## Installation & Usage

```shell
$ cd /wherever
$ npm install digs-example
$ cd digs-example
$ npm start
```

## What it Contains

- Examples of all configuring all (currently) functional plugins:
  - [digs-serial](https://www.npmjs.com/package/digs-serial):  
    An example of a serially-connected [Johnny-Five](http://johnny-five.io)-compatible `Relay` 
- A config file, `digs-example.yaml`

[Digs](https://www.npmjs.com/package/digs) itself is a [Hapi](http://hapijs.com) server, and has an executable `digs`, which accepts a `--config` parameter.  Point that at `digs-example.yml` (as `npm start` does), and you're ready to go.

> *Note: All of this is under heavy development, and this likely works with development branches only, not official releases.  See `package.json` for details.*

## Author

[Christopher Hiller](http://boneskull.com)

## License

MIT
