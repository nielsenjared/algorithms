const consecutive = int => {
  const str = int.toString();
  let max = 0;
  for (let i = 0; i < str.length - 4; i++) {
    if (parseInt(str.slice(i, i + 5)) > max) {
      max = parseInt(str.slice(i, i + 5));
    }
  }
  return max;
}

console.log(consecutive(192837465));
