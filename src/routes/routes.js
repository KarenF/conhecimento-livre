const Author = require('../../models/author')
const index = require('./index')
const content = require('./content')
const author = require('./author')
const course = require('./course')
const admin = require('./admin')
const contentList = require('./contentList')

const allRoutes = {
  index: index(Author),
  content: content(Author),
  author: author(Author),
  course: course(Author),
  admin: admin(),
  contentList: contentList(Author)
}
module.exports = allRoutes
