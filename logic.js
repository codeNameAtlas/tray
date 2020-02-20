var fs = require('fs');
var path = require('path');


//grab input file
var filePath = path.resolve(__dirname + '/input.txt');
var fileData = fs.readFileSync(filePath, 'utf8');

//set up a state for the program
var position = {};
var state = programState(fileData)

function programState (input) {
  var lines = input.trim().split("\n")
  var drivingDirections = lines.pop();
  var roomDimensions = coordinates(lines.shift());
  var startPosition = startingPosition(lines.shift());
  var dirtPositions = lines.map(coordinates).reduce(toDirtObject, {})

  return {
              width: parseInt(roomDimensions.x),
              height: parseInt(roomDimensions.y) ,
              dirtPositions: dirtPositions,
              directions: drivingDirections,
              index: 0
         }
}

//helpers to format the program state
function toDirtObject (val, pos) {
  val[pos.x + "," + pos.y] = true;
  return val;
}

function startingPosition (str) {
  position = {x: parseInt(str[0]), y: parseInt(str[2])};
}

function coordinates (str) {
  var ret = { x:str.split(" ")[0], y:str.split(" ")[1]}
  return ret;
}

//function to handle the Roomba direction
function move (direction, position) {
  if (position.x >= state.width || position.x == 0) {
    return { x:position.x, y:position.y}
  }
  if (position.y >= state.height || position.y == 0) {
    return { x:position.x, y:position.y}
  }
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

//function to read directions and count dirt patches
function drive () {
  var cleanedDirtPatches = 0
  while (state.index < state.directions.length) {
    var nextPos = move(state.directions[state.index], position )
      if (state.dirtPositions[nextPos.x + "," + nextPos.y]) {
        cleanedDirtPatches++
        state.dirtPositions[nextPos.x + "," + nextPos.y] = false;
      }
      state.index++
      position = nextPos
  }
  console.log("A final Roomba position of X: " + position.x, " and Y: " + position.y, " with cleanedDirtPatches: " + cleanedDirtPatches)
}

drive()
