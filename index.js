let Pizzas = [
    {
        id: 1,
        nombre:"Mozzarella",
        ingredientes: ["Salsa", " Mozzarella de Bufala", " Oregano"],
        precio: 800
    },
    {
        id: 2,
        nombre:"4 quesos",
        ingredientes: ["Mozzarella", " Roquefort", " Parmesano", " Provolonep"],
        precio: 950
    },
    {
        id: 3,
        nombre:"Napolitana",
        ingredientes: ["Salsa", " Mozzarella", " tomates cherrys", " Oregano"],
        precio: 500
    },
    {
        id: 4,
        nombre:"Pesto",
        ingredientes: ["Mozzarella", " Albahaca", " Ajo"],
        precio: 900
    },
    {
        id: 5,
        nombre:"Palmitos",
        ingredientes: ["Salsa", " Mozzarella", " Palmito", " Jamón", " Oregano"],
        precio: 850
    },
    {
        id: 6,
        nombre:"Morrones Asados",
        ingredientes: ["Salsa", " Mozzarella", " Morrones Asados"],
        precio: 1000
    }
]

// Ejercicio A

for(let i = 0; i < Pizzas.length; i++) {
    if(i % 2 === 0) {
        console.log(`El ID de esta pizza es: ${Pizzas[i].id} y su tipo es ${Pizzas[i].nombre}`)
    } 
}

// Ejercicio B

let newArr = Pizzas.filter(pizza => pizza.precio > 600 ? console.log(`El valor de la ${pizza.nombre} es más de $600`): console.log(`El valor de la ${pizza.nombre} es menos de $600`))
console.log(newArr)

// Ejercicio C

let tipoYPrecio = Pizzas.map(pizza => console.log(`El precio de la ${pizza.nombre} es de $${pizza.precio}`))

// Ejercicio D

let TipoEIngredientes = Pizzas.map(function (pizza) {
    let ingredientes = pizza.ingredientes
    console.log(`La pizza ${pizza.nombre} tiene los siguientes ingredientes: ${ingredientes}`)
})