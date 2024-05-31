const db = require("../../db")
const sampleData = require("./sampleData2")
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
  console.log("apiEntry in transformObjects func", apiEntry)
  const innerDbShape = {}
  innerDbShape.title = apiEntry.title
  innerDbShape.reporter = apiEntry.author
  innerDbShape.content = apiEntry.description
  innerDbShape.publishedAt = new Date(apiEntry.published)
  innerDbShape.wordcount = null
  innerDbShape.latitude = "?"
  innerDbShape.longitude = "?"
  innerDbShape.picture_link = apiEntry.image
  innerDbShape.priority = "?"
  innerDbShape.createdAt = "?"
  innerDbShape.updatedAt = "?"
  innerDbShape.newsOutlets = null
  return innerDbShape
}
//work with 4 apis and 4 collections
function processData() {
  const apiResponse = getData()
  apiResponse.news.map((article) => {
    const articleCreateInput = transformObject(article)
    // const articleCreateInput = transformObject(apiResponse.news[0])

    //   //move into function with input of specific api response and reeturns
    //   //passes in mongo, needs to have all fields
    //   // db.articles.insertOne(articleCreateInput)
    db.articles.create(articleCreateInput)
  })
}
//chron job will call this
processData()