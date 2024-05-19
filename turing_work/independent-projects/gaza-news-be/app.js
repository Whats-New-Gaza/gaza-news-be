const express = require("express")
const { connectToDb, getDb } = require("./db")
//init app & middleware
const app = express()

//db connection
let db
connectToDb((err) => {
  if (!err) {
    app.listen(3000, () => {
      console.log("app listening on port 3000")
    })
    db = getDb()
  }
})



//routes
app.get("/articles", (req, res) => {
  let articles = []
  db.collection("articles")
    .find()
    .sort({ reporter: 1 })
    .forEach((article) => articles.push(article))
    .then(() => {
      res.status(200).json(articles)
    })
    .catch(() => {
      res.status(500).json({ error: "Could not fetch the documents" })
    })
})

