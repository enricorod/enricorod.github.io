//selezionamento della palla
const ball = document.querySelector("#ball")
//posizione di partenza con la pagina avviata
let mouseX = 0
let mouseY = 0
//stessa cosa ma con la palla
let ballX = 0
let ballY = 0
//velocità di partenza, responsabile dell'effetto "palla che segue il cursore"
let speed = 0.1

function animate() {
  //valore della distanza fra palla e mouse
  let distX = mouseX - ballX
  let distY = mouseY - ballY
  //la posizione della palla rispetto al mouse ha una leggera differenza causata da speed
  ballX = ballX + (distX * speed)
  ballY = ballY + (distY * speed)
  //la posizione della palla è così determinata da palla stessa (perchè è dist a rappresentare il cursore)
  ball.style.left = ballX + "px"
  ball.style.top = ballY + "px"
  //funzione in loop (animazione sempre costante)
  requestAnimationFrame(animate)
}
//eseguo la funzione
animate()
//la funzione si attiva dal movimento del cursore dentro la pagina
document.addEventListener("mousemove", function (event) {
  mouseX = event.pageX
  mouseY = event.pageY
})
