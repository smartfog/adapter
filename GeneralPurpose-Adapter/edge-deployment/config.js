
var config = {};

config.lwm2m = {
    logLevel: 'DEBUG',
    port: '5683',
    defaultType: 'smartspot',
    ipProtocol: 'udp4',
    serverProtocol: 'udp4',
    delayedObservationTimeout: 2000,
    formats: [
        {
            name: 'application-vnd-oma-lwm2m/tlv',
            value: 11542
        },
        {
            name: 'application-vnd-oma-lwm2m/json',
            value: 11543
        },
        {
            name: 'application-vnd-oma-lwm2m/opaque',
            value: 11544
        }
    ],
    writeFormat: 'application-vnd-oma-lwm2m/opaque',
    types: [{name: 'smartspot', url: '/smartspot'}]
};

config.ngsi = {
    logLevel: 'DEBUG',
    contextBroker: {
      host: 'adapter',
      port: '1026'
    },
    server: { port: '4041' },
    deviceRegistry: { type: 'mongodb' },
    mongodb: {
      host: 'mongodb',
      port: '27017',
      db: 'mongo-iotagent'
    },
    types: {
      'smartspot':{
        service: 'smartspot',
        subservice: '/smartspot',
        removeSuffix: true,
        commands: [],
        lazy: [],
        active: [
          {
            name: 'temperature',
            type: 'Number'
          },
          {
            name: 'humidity',
            type: 'Number'
          }
        ],
        lwm2mResourceMapping: {
          'temperature': {
            objectType: 3303,
            objectInstance: 0,
            objectResource: 5700
          },
          'humidity': {
            objectType: 3304,
            objectInstance: 0,
            objectResource: 5700
          }
        }
      }
    },
    service: 'smartspot',
    subservice: '/smartspot',
    providerUrl: 'http://iotagent:4041',
    deviceRegistrationDuration: 'P1M'
};

module.exports = config;
