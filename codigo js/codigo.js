function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
    
  function eleccion(jugada){
        let resultado = ""
            if(jugada == 1) {
            resultado = "Piedra 🥌"
        } else if(jugada == 2) {
            resultado = "Papel 📜"
        } else if(jugada == 3) {
            resultado = "Tijeras ✂️"
        } else {
            resultado = ("Mal Jugada") 
        }
        return resultado
        }
  // 1 es piedra, 2 es papel y 3 es tijera //
    let player = 0
    let pc = 0 
    let wins = 0
    let losses = 0
    
        while(wins < 3 && losses < 3 ) {
        pc = aleatorio(1,3) 
        player = prompt("Elige: 1 para Piedra, 2 para Papel, 3 para Tijera")
      // alert("Elegiste" + player )
        alert("pc elegi:  " + eleccion(pc))
        alert("Tu elegiste: " + eleccion(player))
        // COMBATE
            if (pc == player) {
            alert("EMPATE")
            } else if (player == 1 && pc == 3) {
            alert(" YOU WIN")
            wins = wins + 1
            } else if (player == 2 && pc == 1) {
            alert("YOU WIN")
            wins = wins + 1
            } else if (player == 3 && pc == 2) {
            alert("YOU WIN")
            wins = wins + 1
            } else {
            alert("YOU LOST")
            losses = losses + 1
            }
    } 
    alert("YOU WIN " + wins + " veces. YOU LOST" +  losses + " veces.")