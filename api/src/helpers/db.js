const mongoose = require(`mongoose`)
const { db } = require(`../configurations`)

module.exports.connedDb = () => {
  mongoose.connect(db, {
    useNewUrlParser: true,
  })

  return mongoose.connection
}
