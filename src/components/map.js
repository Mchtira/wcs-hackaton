//canvas gestionà
const c = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const char = document.getElementById('char')
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

  if (y < 10) y += move
  if (y > 600) y -= move
  if (x > 50 && x < 275 && y < 50) {
    obs = true
    if (y > 35) y += move
    else x += move
  }
  if (x > 345 && x < 600 && y < 50) {
    obs = true
    if (y > 35) y += move
    else x -= move
  }
  // Jump barrier top
  if ((x > 225 && x < 275) && (y > 95 && y < 150)) {
    obs = true
    if (x > 225 && x < 250) x -= move
    else x += move
  }
  // side bush on the block
  if ((x > 275 && x < 420) && (y < 185 && y > 140)) {
    obs = true
    if (y > 140 && y < 160) y -= move
    else y += move
  }
  // big blog
  if ((x > 50 && x < 275) && (y < 320 && y > 140)) {
    obs = true
    if (y < 300 && y > 160 && x < 275) x += move
    else if (y < 320 &&  y > 250 && x < 275) y += move
    else if (y > 140 && y < 200 && x < 275) y -= move
  }
  // first line
  if ((x >= 50 && x <= 420) && (y <= 455 && y >= 390)) {
    obs = true
    if (y < 440) y -= move
    else if (y > 440) y += move
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
      if (Math.random() > 0.98) console.log('combat !')
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

  const player = () => {
    ctx.beginPath()
    ctx.drawImage(char, Math.floor(frame / 24) * 24, 0, 24, 24, x, y, 40, 40)
    ctx.closePath()
  }


  const background = () => {
    ctx.beginPath()
    ctx.drawImage(map, 0, 0, 728, 1280)
    ctx.closePath()
  }

updateCanvas()

