const { MongoClient } = require("mongodb")

let dbConnection
module.exports = {
  //first we establish a connection to the db
  connectToDb: (callback) => {
    MongoClient.connect("mongodb://localhost:27017/gazanews")
      .then((client) => {
        dbConnection = client.db()
        return callback()
      })
      .catch((err) => {
        console.log(err)
        return callback(err)
      })
  },
  //return the value of the db connection using this function
  getDb: () => dbConnection
}