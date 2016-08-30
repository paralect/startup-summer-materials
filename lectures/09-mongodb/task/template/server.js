
var koa = require('koa')
var logger = require('koa-logger')
var bodyParser = require('koa-bodyparser')
var route = require('koa-route')
var handlebars = require('koa-handlebars')

var app = koa()

// setup logging
app.use(logger())

// setup views
app.use(handlebars({
  extension: 'html',
}))

// setup body parser
app.use(bodyParser())



const CHAT_ID = 'moday morning chat'
const commentService = require('./services/comment')

// GET
app.use(route.get('/', function* (next) {
  const comments = yield commentService.find({chatId: CHAT_ID})
  const commentsCount = yield commentService.count({chatId: CHAT_ID})
  const topCommenters = yield commentService.topN(CHAT_ID, 8)

  yield this.render('index', {
    comments: comments,
    totalMessages: commentsCount,
    topCommenters: topCommenters,
  })
}))

// POST
app.use(route.post('/', function* (next) {
  var comment = {
    user: this.request.body.user,
    date: new Date(),
    message: this.request.body.message,
  }

  yield commentService.create(comment)

  this.redirect('/')
}))



app.listen(3000)
console.log('listening on port 3000');
