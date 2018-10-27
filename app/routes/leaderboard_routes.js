module.exports = function(app, db) {
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
