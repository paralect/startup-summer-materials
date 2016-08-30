
const BaseService = require('./base')

const CommentSchema = {
  id: '/Comment',
  type: 'object',
  properties: {
    user: {type: 'string', required: true},
    message: {type: 'string', required: true},
  }
}

class CommentService extends BaseService {
  topN(chatId, limit=10) {
    return this._ensureChatId({ chatId })
      .then(() => {
        return this._model.aggregate([
          // {
          //   $match: {
          //     chatId: chatId,
          //   }
          // },
          {
            $group: {
              _id: '$user',
              messages: {
                $sum: 1
              }
            }
          },
          {
            $sort: {
              messages: -1,
            }
          },
          {
            $limit: limit
          }
        ])
      })
  }
}

module.exports = new CommentService('comments', CommentSchema)
