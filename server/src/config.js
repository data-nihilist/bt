import "./boot.js";
import getNodeEnv from "./config/getNodeEnv.js";
import getDatabaseUrl from "./config/getDatabaseUrl.cjs";

const development = {
  clientId: { key: process.env.CLIENT_ID },
  clientSecret: { key: process.env.CLIENT_SECRET },
  authUrl: { key: process.env.AUTH_URL },
  authUrlHeroku: {key: process.env.AUTH_URL_HEROKU },
  databaseUrl: getDatabaseUrl(getNodeEnv()),
  nodeEnv: getNodeEnv(),
  session: { secret: process.env.SESSION_SECRET },
  web: { host: process.env.HOST || "0.0.0.0", port: process.env.PORT || 3000 }
}

const production = {
  ...development,
  s3Bucket: { name: process.env.S3_BUCKET_DEVELOPMENT }
}

const config = { production, development }

export default config[getNodeEnv()]