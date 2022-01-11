const router = require('express').Router()
router.route('/').get((req, res) => {
    msg = `Hola ${req.query.name || "Mundo"} desde get request!`;
    res.json({msg});
  })
router.route('/:lang').get((req, res) => {
    switch(req.params.lang){
      case "es": 
        msg="Hola Mundo!";
        break;
      case "en":
        msg="Hello World!";
        break;
      case "fr":
        msg="Bonjour Monde!";
        break;
      default:
        msg="Hallo Welt!";
    }
    res.json({msg});
  })
  router.route('/').post((req, res) => {
    msg = `Hola ${req.body.name || "Mundo"} desde get request!`;
    res.json({msg});
  })
module.exports = router