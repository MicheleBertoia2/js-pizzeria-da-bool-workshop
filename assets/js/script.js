import pizze from './db.js'
import { checkVeg } from './functions.js';



const pizzeRemap = pizze.map (pizza => {
  const {name, image, price, ingredients, description, votes} = pizza;
  const isVeg = checkVeg(ingredients);
  return {
    name,
    image,
    price,
    ingredients,
    description,
    votes,
    isVeg
  }
})

console.log(pizzeRemap);

pizzeRemap.sort((a, b) => (a.price - b.price))
console.log(pizzeRemap);

function getPizzaTop (pizze){
//  accetta l'array delle pizze, calcola la media voti e restituisce la pizza con la media più alta
}

