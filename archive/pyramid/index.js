const pyramid = n => {
  const steps = [];

  for (let i = 0; i <= n; i++) {
    let step = [];

    for (let j = 0; j <= n + n; j++) {
      if (j < n - i) {
        step.push(' ');
      } else if (j > n + i){
        step.push(' ');
      } else {
        step.push('#');
      }
    }
    steps.push(step);
  }
  return steps;
}

module.exports = pyramid;
