import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join((process.cwd(), '.env')) });

export default {
  port: process.env.port,
  database_url: process.env.db_url,
  bcrypt_salt_rounds: process.env.bcrypt_salt_rounds,
  jwt_access_secret:process.env.jwt_access_secret,
  jwt_access_expires_in: process.env.jwt_access_expires_in,
  jwt_refresh_secret: process.env.jwt_refresh_secret,
  jwt_refresh_expires_in:process.env.jwt_refresh_expires_in
};
