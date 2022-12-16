const skills = require('../models/skill')

module.exports = {
    index,
    show,
    new: newSkill
}

function index(req, res){
res.render('skills/index', {
    skills: skills.getSkills()
})
}


function show(req, res) {
    res.render('skills/show', {
      skill: skills.getOne(req.params.id),
    })
}


function newSkill (req, res) {
    res.render('skills/new',)
  }
  