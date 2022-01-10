module.exports = function reverse (n) {
  if(n < 0) {
    n = n * -1;
  }

  let res = 0;

  while(n) {
    res = res * 10;
    res += n % 10;
    n = (n - (n % 10)) / 10;
  }

  return res;
}
