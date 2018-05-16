const gigasecond = bday => {
  const t = new Date(bday);
  t.setSeconds(10**9);
  let str = t.toISOString();
  return str;
}

module.exports = gigasecond;
