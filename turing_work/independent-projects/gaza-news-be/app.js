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
app.get("/newsOutlets", (req, res) => {
  let newsOutlets = []
  db.collection("newsOutlets")
    .find()
    .sort({ orgName: 1 })
    .forEach((outlet) => newsOutlets.push(outlet))
    .then(() => {
      res.status(200).json(newsOutlets)
    })
    .catch(() => {
      res.status(500).json({ error: "Could not fetch the documents" })
    })
})
app.get("/reporters", (req, res) => {
  let reporters = []
  db.collection("reporters")
    .find()
    .sort({ name: 1 })
    .forEach((reporter) => reporters.push(reporter))
    .then(() => {
      res.status(200).json(reporters)
    })
    .catch(() => {
      res.status(500).json({ error: "Could not fetch the documents" })
    })
})
app.get("/users", (req, res) => {
  let users = []
  db.collection("users")
    .find()
    .sort({ username: 1 })
    .forEach((user) => users.push(user))
    .then(() => {
      res.status(200).json(users)
    })
    .catch(() => {
      res.status(500).json({ error: "Could not fetch the documents" })
    })
})