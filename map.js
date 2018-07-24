//canvas gestionà
const c = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const img = document.getElementById('BG')
const char = document.getElementById('char')
const tree1 = document.getElementById('tree1')
const tree2 = document.getElementById('tree2')
const herbes = document.getElementById('herbes')
const map = document.getElementById('map')


// move gestion
let frame = 0
let x = 160
let y = 600
let obsX = 0
let obsY = 0

let up = false
let down = false
let left = false 
let right = false



const updateCanvas = (delta) => {
  const move = delta / 5
  let obs = false 

  if ((x >= 225 && x <= 275) && (y <= 140 && y > 105)) {
    obs = true
  }

  if ((x >= 50 && x <= 275) && (y <= 320 && y > 140)) {
    obs = true
  }

  if ((x >= 50 && x <= 420) && (y <= 455 && y >= 390)){
    obs = true
    if (y < 440) {
      console.log('lol')
      y -= move
    }
    if (y > 440) {
      y += move
    } 
  }


  if (!obs && right && x + move < 550 ) {
    x += move
    ctx.clearRect(x - move, y, 24, 24)
  }

  if (!obs && left && x - move > 59) {
    x -= move
    ctx.clearRect(x + move, y, 24, 24)
  } 

  if (down && !obs) {
    y += move
    ctx.clearRect(x, y - move, 24, 24)
  }

  if (up && !obs) {
    y -= move
    ctx.clearRect(x, y + move, 24, 24)
  }

  background()
  player()
}


let prevTime = performance.now()
requestAnimationFrame(function loop() {
  const now = performance.now()
  const delta = now - prevTime
  prevTime = now


  if (up || left || down || right) {   
    frame += delta / 5
    if (frame >= 168) frame = 0
  } else {
    frame = 0
  }

  updateCanvas(delta)
  requestAnimationFrame(loop)  
})

document.addEventListener('keydown', e => {
  if (e.code === "ArrowUp")
    up = true
  if (e.code === "ArrowRight")
    right = true
  if (e.code === "ArrowLeft")
    left = true
  if (e.code === "ArrowDown")
    down = true
})

document.addEventListener('keyup', e => {
  if (e.code === "ArrowUp")
    up = false
  if (e.code === "ArrowRight")
    right = false
  if (e.code === "ArrowLeft")
    left = false
  if (e.code === "ArrowDown")
    down = false
})

const drawTree = () => {
  ctx.beginPath()
  ctx.drawImage(tree1, obsX, obsY, 24, 24)
  ctx.closePath()
  obsX += 24
  if (obsX >= 500) {
    obsX = 0
    obsY += 24
  }
}

const drawherbes = () => {
  ctx.drawImage(herbes, obsX, obsY, 24, 24)
  ctx.closePath()
  obsX += 24
  if (obsX >= 500) {
    obsX = 0
    obsY += 24
  }
}

const player = () => {
  ctx.beginPath()
  ctx.drawImage(char, Math.floor(frame / 24) * 24, 0, 24, 24, x, y, 40, 40)
  ctx.closePath()
  console.log({x, y})
}


const background = () => {
  // if (y >= )
  ctx.beginPath()
  ctx.drawImage(map, 0, 0, 728, 1280)
  ctx.closePath()
}







// const lol = () => map.forEach(obs => {
//   if (obs === herbes) {
//     drawherbes()
//   } else if (obs === tree1) {
//     drawTree()
//   }
// })

//width === 21 img
// const map = 
// [tree1, tree1, tree1, tree1, tree1, tree1, tree1, tree1, tree1, tree1, tree1, tree1, tree1, tree1, tree1, tree1, tree1, tree1, tree1, tree1, tree1, 
//   tree1, herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,tree1,
//   tree1, herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,tree1,
//   tree1, herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,tree1,
//   tree1, herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,tree1,
//   tree1, herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,tree1,
//   tree1, herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,tree1,
//   tree1, herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,tree1,
//   tree1, herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,tree1,
//   tree1, herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,tree1,
//   tree1, herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,tree1,
//   tree1, herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,tree1,
//   tree1, herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,tree1,
//   tree1, herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,tree1,
//   tree1, herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,tree1,
//   tree1, herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,tree1,
//   tree1, herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,tree1,
//   tree1, herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,tree1,
//   tree1, herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,tree1,
//   tree1, herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,tree1,
//   tree1, herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,tree1,
//   tree1, herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,tree1,
//   tree1, herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,tree1,
//   tree1, herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,herbes,tree1,
//   ] 
// lol()

updateCanvas()

