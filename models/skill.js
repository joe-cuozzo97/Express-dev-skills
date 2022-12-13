const skills = [
  { id: 12, skill: "running"},
  { id: 13, skill: "juggling",},
  { id: 14, skill: "coding",}
];

module.exports = {
  getSkills,
};

function getSkills() {
  return skills;
}

getOne:(id) => {
  id = parseInt(id)
  return skills.find(skill => skill.id === id)
}