function sortCharacterForHealth(array) {
  const result = array.sort((a, b) => b.health - a.health);
  return result;
}

export default sortCharacterForHealth;
