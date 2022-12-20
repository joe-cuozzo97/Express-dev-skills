const skills = require('../models/skill')

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill
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
    console.log('im the new')
    res.render('skills/new')
  }
  
  function create(req, res){
    req.body.learned= !!req.body.learned
    skills.create(req.body)
    res.redirect('/skills')
}
function deleteSkill(req, res){
    skills.delete(req.params.id)
    res.redirect('/skills')
}
  