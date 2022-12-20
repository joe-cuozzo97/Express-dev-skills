const skills = [
  { id: 12, skill: "running", expert: true},
  { id: 13, skill: "juggling", expert: false},
  { id: 14, skill: "coding", expert: false}
];

module.exports = {
  getSkills,
  getOne,
  create,
  delete: deleteOne
};

function getSkills() {
  return skills;
}

function getOne(id){
  id = parseInt(id)
  return skills.find(skill => skill.id === id)
}

function create(skill){
  skill.id = Date.now() % 1000;
  skills.push(skill)

}

function deleteOne(id){
  id=parseInt(id)
  const idx= skills.findIndex(skill => skill.id ===id)
  skills.splice(idx, 1)
}