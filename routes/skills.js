var express = require('express');
var router = express.Router();

const skillsCtrl = require('../controllers/skills')

router.get('/', skillsCtrl.index)

router.get('/:id', skillsCtrl.show)

router.get('/new', skillsCtrl.new)



module.exports = router;
