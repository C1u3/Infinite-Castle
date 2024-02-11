// Re-arranging array 
Array.prototype.parse2D = function () {
  const rows = []
  for (let i = 0; i < this.length; i += 16) {
    rows.push(this.slice(i, i + 16))
  }
  return rows
}

// Adding collision blocks
Array.prototype.createObjectsFrom2D = function () {
  const objects = []
  this.forEach((row, yIndex) => {
    row.forEach((symbol, xIndex) => {
      if (symbol === 292) {

        // Creating collision blocks
        objects.push(new CollisionBlock({ 
          position: { x: xIndex * 64, y: yIndex * 64, } 
        }))
      }
    })  
  })
  return objects
}