## Promesas
```
const recibirComida = () => {
  return new Promise((resolve, reject) => {
    const estaElMenu = true
    setTimeout(() => {
      (estaElMenu ? resolve('Recibir la comida') : reject('No queda menu'))

    }, 2000)
  })

}

console.log('voy restaurant')
console.log('me siento')
console.log('miro la carta')
console.log('ordeno')

recibirComida().then(respuesta => {
  console.log(respuesta)
  console.log('como')
}).catch(error => {
  console.log(error)
}).finally( () =>{
  console.log(' me voy')
})


```