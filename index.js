function theBeatlesPlay (musicians, instruments) {
  var stringStorage = [];
  for (var i = 0; i < musicians.length; i++) {
    stringStorage.push(musicians[i] + " plays " + instruments[i]);
  }
  return stringStorage;
}

function johnLennonFacts(facts) {
  var excitedStrings = [];
  var i = facts.length;
  while (i > 0) {
    excitedStrings.push(facts[i] + "!!!");
    i--;
  }
  return excitedStrings;
}
