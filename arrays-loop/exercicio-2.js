let nome = "Arnaldo Cesar Coelho";
let contador = 0;

for (let letra of nome) {
    if (letra === "a" || letra === "A") {
        contador = contador + 1;
    }
}

console.log(`Existe ${contador} "a" no nome`);