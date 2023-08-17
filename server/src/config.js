import "./boot.js";
import getNodeEnv from "./config/getNodeEnv.js";
import getDatabaseUrl from "./config/getDatabaseUrl.cjs";

// export default {
//   nodeEnv: getNodeEnv(),
//   session: { secret: process.env.SESSION_SECRET },
//   databaseUrl: getDatabaseUrl(getNodeEnv()),
//   web: { host: process.env.HOST || "0.0.0.0", port: process.env.PORT || 3000 }
// };
const development = {
  awsAccess: { key: process.env.AWS_ACCESS_KEY },
  awsSecret: { key: process.env.AWS_SECRET_KEY },
  s3Bucket: { name: process.env.S3_BUCKET_DEVELOPMENT },
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