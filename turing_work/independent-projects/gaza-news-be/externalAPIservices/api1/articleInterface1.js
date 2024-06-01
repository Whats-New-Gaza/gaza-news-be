const db = require("../../db")
const sampleData = require("./sampleData1")
//look into design/interface patterns(ex adapter pattern)
//requirements: query api#1, get request. encapsulate verys specific api1 related quirks
//chron job to trigger api requests
//crawl,walk,run


/*
1.query api1.at whatever endpoint will get article related data.purpose of api1 file is to enceapsulate this code
2.we have data in json format. */

function getData() {
  return sampleData
}
function transformObject(apiEntry) {
  // console.log("apiEntry in transformObjects func", apiEntry)
  const innerDbShape = {}
  innerDbShape.title = apiEntry.title
  innerDbShape.reporter = apiEntry.author
  innerDbShape.content = apiEntry.content
  innerDbShape.publishedAt = new Date(apiEntry.publishedAt)
  innerDbShape.wordcount = apiEntry.content.split(" ").length
  innerDbShape.latitude = "?"
  innerDbShape.longitude = "?"
  innerDbShape.picture_link = apiEntry.urlToImage
  innerDbShape.priority = "?"
  innerDbShape.createdAt = "?"
  innerDbShape.updatedAt = "?"
  innerDbShape.newsOutlets = apiEntry.source.name
  return innerDbShape
}

//work with 4 apis and 4 collections
function processData() {
  const apiResponse = getData()
  let newArticleList = []
  apiResponse.articles.map((article) => {
    const articleCreateInput = transformObject(article)
    newArticleList.push(articleCreateInput)
    //move into function with input of specific api response and reeturns
    //passes in mongo, needs to have all fields
    // db.articles.insertOne(articleCreateInput)
    // console.log(db.getDb().collection("articles").find({}).pretty())
    console.log("test", db.getDb())
    // .create(articleCreateInput)
  })

}

db.connectToDb(processData)

