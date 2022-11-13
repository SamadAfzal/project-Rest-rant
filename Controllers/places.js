const router = require('express').Router()

router.get('/new', (req, res) => {
  res.render('places/new')
})


router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: 'public/images/piotr-miazga-WBX-ZLr8P7I-unsplash.jpg'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/nathan-dumlao-2z3MOB3kfJU-unsplash.jpg'
      }]
      
    res.render('places/index', {places})
})

module.exports = router