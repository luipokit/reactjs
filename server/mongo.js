var mongojs = require('mongojs')
// var JSONStream = require('JSONStream')

var connectionString = 'mongodb://localhost:27017/db001'

var db = mongojs(connectionString)

// db.users.find().pipe(JSONStream.stringify()).pipe(process.stdout);

module.exports = {

  userfind: function() {
    db.users.find((err, docs) => {
      if (err) {
        console.log(err)
      }
      if (docs) {
        return docs;
      }
    })
  },

  bookfind: function() {
    db.books.find((err, docs) => {
      if (err) {
        console.log(err)
      }
      if (docs) {
        console.log(docs)
      }
    })
  }
}
