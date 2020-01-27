const dotEnvResult = require('dotenv').config()

if (dotEnvResult.error) {
  throw dotEnvResult.error
}

module.exports = {
  env: {
    GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
  }
}
