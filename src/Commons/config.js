/* istanbul ignore file */

import { config as _config } from 'dotenv';
import { resolve } from 'path';
import process from 'process';

if (process.env.NODE_ENV === 'test') {
  _config({
    path: resolve(process.cwd(), '.test.env')
  });
} else {
  _config();
}

const config = {
  app: {
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
    port: process.env.PORT,
    debug: process.env.NODE_ENV === 'development' ? { request: ['error'] } : {},
  },
  database: {
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
  },
};

export default config;