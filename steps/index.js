const stepper = n => {
  const steps = [];

  for (let i = 1; i <= n; i++) {
    let step = [];
    for (let j = 0; j < n; j++) {
      if (j < i) {
        step.push("#");
      } else {
        step.push(' ');
      }
    }
    steps.push(step);
  }
  return steps;
}

module.exports = stepper;
