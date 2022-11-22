const router = require('express').Router()
require('dotenv').config()
const db = require('../models')

router.get('/', (req, res) => {
    db.Place.find()
    .then((places) => {
      res.render('places/index', { places })
    })
    .catch(err => {
      console.log(err) 
      res.render('error404')
    })
})


router.get('/new', (req, res) => {
  console.log(req.body)
  res.render('places/new')
})



router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
  .then(place => {
      res.render('places/show', { place })
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})



router.get('/:id/edit', (req, res) => {
  res.send('GET edit form stub')
})





//Post//

router.post('/', (req, res) => {
  db.Place.create(req.body)
  .then(() => {
      res.redirect('/places')
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})




//delete//

router.delete('/:id', (req, res) => {
  res.send('DELETE /places/:id stub')
})

module.exports = router