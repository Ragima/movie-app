const { Client } = require('pg');
const { connectionString } = require('../helpers/connectionStringToDb');
console.log('----', connectionString)

const pgClient = new Client(connectionString);
pgClient.connect().then(() => console.log('CONNECT TO DB')).catch(e => console.log('e', e));

module.exports = 'pgClient';
