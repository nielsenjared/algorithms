const anagram = (a, b) => {
  return a.split('').sort().join() == b.split('').sort().join();
}

module.exports = anagram;
