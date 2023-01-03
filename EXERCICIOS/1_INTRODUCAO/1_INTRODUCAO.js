const fs = require('fs')

console.log("Criando programa que lê aquirvo de texto\n")

fs.readFile('1_INTRODUCAO.txt', 'utf8', (err, data) => {
    if(err) {
        console.log(err)
    }

    console.log(data)
})

