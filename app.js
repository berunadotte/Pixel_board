const board = document.querySelector('#board')
const colors = [
  '#b9207e',
  '#b920a2',
  '#8320b9',
  '#4620b9',
  '#2090b9',
  '#20b96a',
  '#b96520',
  '#b92820',
]
const SQUARES_NUMBER = 399

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div')
  square.classList.add('square')

  square.addEventListener('mouseover', () => setColor(square))

  square.addEventListener('mouseleave', () => removeColor(square))

  board.append(square)
}

function setColor(element) {
  const color = getRandomColor()
  element.style.backgroundColor = color
  element.style.boxShadow = `0 0 4px ${color}, 0 0 25px ${color}`
}

function removeColor(element) {
  element.style.backgroundColor = '#1d1d1d'
  element.style.boxShadow = '0 0 2px #000'
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length)
  return colors[index]
}
