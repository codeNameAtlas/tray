const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname + '/input.txt');

const fileData = fs.readFileSync(filePath, 'utf8');


var position = { x:1, y:2 }

/*var state = { width: 5,
              height: 5,
              dirtPositions: {"1,0": true, "2,2": true, "2,3": true},
              directions: "NNESEESWNWW",
              index: 0}
*/

var state = fileInput(fileData)


console.log('hhhhhh==>>', state)

function toObject (a, pos) {
  a[pos.x + "," + pos.y] = true;
  return a;
}

function fileInput (input) {

  var lines = input.trim().split("\n")
  //console.log("fileInput function: ", lines)
  var drivingDirections = lines.pop();
  var roomDimensions = coordinates(lines.shift());
  var startPosition = coordinates(lines.shift())
  var dirtPositions = lines.map(coordinates).reduce(toObject, {})

  return {
              width: parseInt(roomDimensions.x),
              height: parseInt(roomDimensions.y) ,
              dirtPositions: dirtPositions,
              directions: drivingDirections,
              index: 0
         }
}

function coordinates (str) {
  //console.log('sssheyyyy==>', str)
  var ret={x:str.split(" ")[0], y:str.split(" ")[1]}
  //console.log("coordinates function",str, ret)
  return ret;
  //returns an object
}


function move (direction, position) {
  if (direction === "N")  {
    //move north from position
    return { x:position.x, y:position.y + 1}
  }
  if (direction === "E")  {
    //move north from position
    return { x:position.x + 1, y:position.y}
  }
  if (direction === "W")  {
    //move north from position
    return { x:position.x - 1, y:position.y}
  }
  if (direction === "S")  {
    //move north from position
    return { x:position.x, y:position.y - 1}
  }
}

function drive () {
  var hits = 0
  while (state.index < state.directions.length) {
    var nextPos = move(state.directions[state.index], position )
      if (state.dirtPositions[nextPos.x + "," + nextPos.y]) {
        hits++
        state.dirtPositions[nextPos.x + "," + nextPos.y] = false;
        console.log("hitpositionX: " + nextPos.x, "hitpositionY: " + nextPos.y);
      }
      state.index++
      position = nextPos
  }
  console.log("positionX: " + position.x, "positionY: " + position.y, " and hits: " + hits)
}

drive()
