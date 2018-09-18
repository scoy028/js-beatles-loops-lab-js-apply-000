// add solution here
function theBeatlesPlay(musiciansArray, instrumentsArray) {
  let statementArray = [];
  let string = "";
  for (let i = 0; i < musiciansArray.length - 1; ++i) {
    let curMusician = musiciansArray[i];
    let curInstrument = instrumentsArray[i];
    string = curMusician + " plays the " + curInstrument;
    statementArray.push(string);
  }
  return statementArray;
}