// add solution here
function theBeatlesPlay(musiciansArray, instumentsArray) {
  let statementArray = [];
  let string = "";
  for (let i = 0; i < musiciansArray.length - 1; ++i) {
    string = musiciansArray[i] + " plays the " + instumentsArray[i];
    statementArray.push(string);
  }
}