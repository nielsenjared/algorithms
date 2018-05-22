const colorAlpha = val => {
  return val < 85 ? "Transparent" : val > 85 && val < 170 ? "Translucent" : val > 170 && val < 256 ? "Opaque" : "Out of range";
}

module.exports = colorAlpha;
