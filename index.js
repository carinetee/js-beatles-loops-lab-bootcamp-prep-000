function theBeatlesPlay (musicians, instruments) {
  var stringStorage = [];
  for (var i = 0; i < musicians.length; i++) {
    stringStorage.push(musicians[i] + " plays " + instruments[i]);
  }
  return stringStorage;
}
