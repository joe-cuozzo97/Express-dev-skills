const skills = [
  { id: 12, skill: "running", expert: true },
  { id: 13, skill: "juggling", expert: false },
  { id: 14, skill: "coding", expert: false },
];

module.exports = {
  getAll,
};

function getAll() {
  return skills;
}
