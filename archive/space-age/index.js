const spaceAge = age => {
  return {
    earth: +((age / 31557600).toFixed(2)),
    mercury: +((age / (31557600 * 0.2408467)).toFixed(2)),
    venus: +((age / (31557600 * 0.61519726)).toFixed(2)),
    mars: +((age / (31557600 * 1.8808158)).toFixed(2)),
    jupiter: +((age / (31557600 * 11.862615)).toFixed(2)),
    saturn: +((age / (31557600 * 29.447498)).toFixed(2)),
    uranus: +((age / (31557600 * 84.016846)).toFixed(2)),
    neptune: +((age / (31557600 * 164.79132)).toFixed(2))
  };
}

module.exports = spaceAge;
