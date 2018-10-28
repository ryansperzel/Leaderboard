const ObjectID = require('mongodb').ObjectID

module.exports = function(app, db) {

  app.get('/leaderboards/:id', (req, res) => {
    const id = req.params.id
    const details = { _id: new ObjectID(id)}
    db.db().collection('leaderboard').findOne(details, (err, item) => {
      if (err) {
        res.send({ err: 'An error has occurred' })
      } else {
        res.send(item)
      }
    })
  })

  app.delete('/leaderboards/:id', (req, res) => {
    const id = req.params.id
    const details = { _id: new ObjectID(id)}
    db.db().collection('leaderboard').remove(details, (err) => {
      if (err) {
        res.send({ err: 'An error has occurred' })
      } else {
        res.send(`Leaderboard ${id} successfully deleted`)
      }
    })
  })

  app.put('/leaderboards/:id', (req, res) => {
    const id = req.params.id
    const details = { _id: new ObjectID(id)}
    const board = { text: req.body.body, title: req.body.title }
    db.db().collection('leaderboard').update(details, board, (err, item) => {
      if (err) {
        res.send({ err: 'An error has occurred' })
      } else {
        res.send(item)
      }
    })
  })

  app.post('/leaderboard', (req, res) => {
    const board = { text: req.body.body, title: req.body.title }
    db.db().collection('leaderboard').insert(board, (err, result) => {
      if (err) {
        res.send({ err: 'An error has occurred' })
      } else {
        res.send(result.ops[0])
      }
    })
  })
}
