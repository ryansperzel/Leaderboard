module.exports = function(app, db) {
  app.post('/leaderboard', (req, res) => {
    // create a leaderboard here
    res.send('this is your leaderboard')
  })
}
