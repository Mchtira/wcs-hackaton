const c = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const img = document.getElementById('BG')
const player = document.getElementById('player')
let x = 0;
let y = 0;

document.addEventListener('keydown', e => {
  if (e.code === "ArrowRight") {
    x += 5
  draw()
  }
})

console.log(document.getElementById('canvas').width)
document.getElementById('canvas').width +=  - 100
console.log(document.getElementById('canvas').width)

const draw = () => {

  const pat = ctx.createPattern(img, 'repeat')

  ctx.beginPath()
  ctx.rect(x, y, 50, 50)
  ctx.fillStyle = pat
  ctx.fill()

  // ctx.drawImage(img, 0, 0)
  ctx.closePath()
}

draw()