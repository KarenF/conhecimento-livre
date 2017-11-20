const Controller = require('../mappers/models_controller')

const contentList = Author => (req, res, next) => {
  const id = req.params.id
  const authorController = new Controller(Author)
  const responseData = {}
  responseData.allContents = []
  authorController
    .findCourseById(id)
    .then((authorItem) => {
      responseData.allContents = authorItem.courses[0].contents
      responseData.contentItem = responseData.allContents.id(id)
      const currentContentIndex = responseData.allContents.indexOf(responseData.contentItem)
    })
    .then(() => res.render('contentList', responseData))
    .catch((error) => {
      console.log(error)
      next()
    })
  }

module.exports = contentList
