module.exports = function getZerosCount(number) {
  var k=0;
  for (var i=5; i<=number; i*=5){
    k+=parseInt(number/i);
  }
  return k;
}
