const dotenv = require('dotenv')

dotenv.config()

module.exports = {
  endpoint: process.env.API_URL,
  port: process.env.PORT,
  googleGeoKey: process.env.GEO_API_KEY,
  mongoKey: process.env.MONGO_CONN_STR,
  jwtKey: process.env.JWT_SECRET,
  awsKeyId: process.env.AWS_ACCESS_KEY_ID,
  awsKeySecret: process.env.AWS_SECRET_ACCESS_KEY,
  awsBucket: process.env.AWS_BUCKET,
}
