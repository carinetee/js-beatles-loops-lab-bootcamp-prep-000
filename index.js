function theBeatlesPlay (musicians, instruments) {
  var stringStorage = [];
  for (var i = 0; i < musicans.length; i++) {
    stringStorage.push(musicians[i] + " plays " + instruments[i]);
  }
  return stringStorage;
}