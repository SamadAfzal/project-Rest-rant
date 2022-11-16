const router = require('express').Router()
require('dotenv').config()
const places = require('../Models/places.js')
//Get//
router.get('/new', (req, res) => {
  console.log(req.body)
  res.render('places/new')
})

router.get('/:id', (req, res) => {
  let id = req.params.id;
  let place = places.find(place => place.id === id)
  res.render('places/show', { place, id })

})


//Post//

router.post('/', (req, res) => {
  console.log(req.body)
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = 'http://placekitten.com/400/400'
  }
  if(!req.body.id) {
    req.body.id = makeid(10);
  }
  if (!req.body.city) {
    req.body.city = 'Anytown'
  }
  if (!req.body.state) {
    req.body.state = 'USA'
  }
  places.push(req.body)
  res.redirect('/places')
})


router.get('/', (req, res) => {
    res.render('places/index', {places})
})

//delete//

router.delete('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    places.splice(id, 1)
    res.redirect('/places')
  }
});

router.get('/:id/edit', (req, res) => {
  let id = Number(req.params.id)
  console.log('EDIT', places);
  let place = places.find(place => place.id === id)
  res.render('places/edit', { place })

});


//put//
router.put('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
      res.render('error404')
  }
  else if (!places[id]) {
      res.render('error404')
  }
  else {
      if (!req.body.pic) {
          req.body.pic = 'http://placekitten.com/400/400'
      }
      if (!req.body.city) {
          req.body.city = 'Anytown'
      }
      if (!req.body.state) {
          req.body.state = 'USA'
      }
      places[id] = req.body
      res.redirect(`/places/${id}`)
  }
})

function makeid(length) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}


module.exports = router