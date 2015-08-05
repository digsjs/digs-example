'use strict';

var createDigs = require('digs');

var digs = createDigs({
  namespace: 'digs',
  project: 'home',
  coap: {
    port: 5683,
    address: 'localhost'
  },
  http: {
    port: 9090,
    address: 'localhost'
  }
});

digs.register({
  register: require('digs-serial'),
  options: {
    devices: [
      {
        id: 'dink',
        components: [
          {
            'class': 'relay',
            id: 'Lava Lamp',
            description: 'Silver Lava Lamp',
            pin: 11,
            type: 'NC'
          }
        ]
      }
    ]
  }
})
  .then(function() {
    digs.start();
  });
