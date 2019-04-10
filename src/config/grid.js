var gameConfig = require('./game-config.js')

function createGrid () {
  let referenceGrid = ['-']

  let distance = 130
  let initX = (gameConfig.width * 2 / 3) - distance
  let initY = (gameConfig.height / 2) + distance

  for(let y = initY; y >= initY - (2 * distance); y -= distance ){
    for(let x = initX; x <= initX + (2 * distance); x += distance){
      referenceGrid.push({x: x, y: y})
    }
  }

  return referenceGrid
}

let grid = createGrid()

export { grid }
