// add solution here
function theBeatlesPlay(musicians, instuments) {
  let statement = [];
  let string = "";
  for (let i = 0; i < musicians.length - 1; ++i) {
    string = musicians[i] + " plays the " + instuments[i];
    statement += string;
  }
}