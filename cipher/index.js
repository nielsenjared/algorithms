const cipher = msg => {
  let cph = '';
  for (let i = 0; i < msg.length; i++) {
    let abc = msg.charCodeAt(i);
    if (abc >= 87) {
      cph += String.fromCharCode((abc - 87) + 65);
    } else {
      cph += String.fromCharCode(abc + 4);
    }
  }
  return cph;
}

module.exports = cipher;
