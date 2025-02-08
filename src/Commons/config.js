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
  database: {
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
  },
};

export default config;