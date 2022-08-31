# Consumo de API

Para consumir APIs tenemos que estar familiarizados con conceptos como fetch y promesas. Cuando se habla expresamente de React debemos tener noción de otros conceptos como el ciclo de vida de los componentes y los estados. Lo que hemos visto hasta ahora con los Hooks como useEffect y useState

## ¿Qué es fetch API?

Es una interfaz para obtener información de una url. Que está ampliamente soportada por los navegadores de hoy dia. 

[Mas info](https://developer.mozilla.org/es/docs/Web/API/Fetch_API)

## Uso de fetch
Su uso es sencillo y lo podemos ver a lo largo del siguiente [ejemplo](https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch)

## La API de Rick & Morty
Para lo que nos saben API como sus siglas lo indican es Application Programming Interface, en español, Interfaz de Programación de Aplicaciones.

Es un conjunto de servicios y funciones destinados a alimentar de información a otro sistema que lo requiera. Dicho de una forma más criolla, es un sistema que brinda información y procedimientos a otros sistemas que la requieran.

Dentro de internet encontramos múltiples tipos de API con diferentes tipo de información. Algunas que requieren seguridad para utilizarlas, otras que tienen un cupo de uso gratis y otro pago. Y por último, apis libres de uso. Lo que tienen en común hoy en dia es que la gran mayoría trabajan sobre una arquitectura REST (Transferencia de Estado Representacional)

Para explicar el consumo de APIS con React utilizaremos la API de Rick & Morty. Que se encuentra [aqui](https://rickandmortyapi.com/documentation)

Esta API no requiere autenticación y nos provee de diferentes endpoints. Para el ejemplo usaremos el de obtener personajes

  **GET** https://rickandmortyapi.com/api/character
