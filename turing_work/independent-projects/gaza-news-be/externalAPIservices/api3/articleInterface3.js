const db = require("../../db")
const sampleData = require("./sampleData3")
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
  innerDbShape.title = apiEntry.headline.main
  innerDbShape.reporter = apiEntry.byline.original.split(" ").slice(1).join(" ")
  innerDbShape.content = apiEntry.abstract
  innerDbShape.publishedAt = new Date(apiEntry.pub_date)
  innerDbShape.wordcount = apiEntry.word_count
  innerDbShape.latitude = "?"
  innerDbShape.longitude = "?"
  innerDbShape.picture_link = apiEntry.multimedia[0].url
  innerDbShape.priority = "?"
  innerDbShape.createdAt = "?"
  innerDbShape.updatedAt = "?"
  innerDbShape.newsOutlets = apiEntry.source
  return innerDbShape
}
//work with 4 apis and 4 collections
function processData() {
  const apiResponse = getData()
  apiResponse.response.docs.map((article) => {
    const articleCreateInput = transformObject(article)
    //move into function with input of specific api response and reeturns
    //passes in mongo, needs to have all fields
    // db.articles.insertOne(articleCreateInput)
    db.articles.create(articleCreateInput)
  })
}
//chron job will call this
processData()