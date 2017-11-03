const router = require('express').Router()

router.get('/get-test', (req, res) => {
  res.json({ get: 'okay' })
})

router.post('/post-test', (req, res) => {
  console.log(req.body.test)
  res.json({ post: 'okay' })
})

module.exports = router
