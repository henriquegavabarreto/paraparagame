function createGrid () {
  let referenceGrid = ['-']

  let distance = 200
  let initX = (window.innerWidth / 2) - distance
  let initY = (window.innerHeight / 2) + distance

  for(let y = initY; y >= initY - (2 * distance); y -= distance ){
    for(let x = initX; x <= initX + (2 * distance); x += distance){
      referenceGrid.push({x: x, y: y})
    }
  }

  return referenceGrid
}

let grid = createGrid()

export { grid }
