// add solution here
function theBeatlesPlay(musicians, instruments){
  var array = [];
  for(var i = 0; i < musicians.length; i++){
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array;
}

function johnLennonFacts(array){
  var length = array.length;
  var i = 0;
  while(i < length){
    array[i] = array[i] + "!!!";
  }
}