const array = require('./array')

const mapeado = array.map(mapa => { return { id: mapa.id, nome: mapa.title } })

console.log(mapeado);