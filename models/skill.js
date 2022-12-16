const skills = [
  { id: 12, skill: "running", expert: true},
  { id: 13, skill: "juggling", expert: false},
  { id: 14, skill: "coding", expert: false}
];

module.exports = {
  getSkills,
  getOne
};

function getSkills() {
  return skills;
}

function getOne(id){
  id = parseInt(id)
  return skills.find(skill => skill.id === id)
}