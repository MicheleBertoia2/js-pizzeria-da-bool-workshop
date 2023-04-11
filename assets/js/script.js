import pizze from './db.js'
import { checkVeg } from './functions.js';

const ul = document.querySelector('ul');
const submit = document.getElementById('submit');


//rimappo le pizze col filtro vegano

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
reorderPizza()

submit.addEventListener('click', function(){
  const inputName = document.querySelector('[name="name"]');
  const inputPrice = document.querySelector('[name="price"]');
  const inputIngredients = document.querySelector('[name="ingredients"]');
  const selectedIngredients = [];

  for (let ingredient of inputIngredients.options) {
    if(ingredient.selected){
      selectedIngredients.push(ingredient.value)
    }
  }
  //creiamo un oggetto al quale assegnare il valore delle variabili come proprietà

  const newPizza =
    {
      name : inputName.value,
      price : inputPrice.value,
      ingredients : selectedIngredients   
    };

    pizzeRemap.push(newPizza)
    reorderPizza()    
  })
  
  function reorderPizza() {
    pizzeRemap.sort((a, b) => (a.price - b.price))  
    ul.innerHTML = ''
    pizzeRemap.forEach((pizza) => {
      const li = document.createElement('li');  
      const {name, price} = pizza;
      li.innerHTML = `${name} ${price} €`;
      ul.append(li)
    })
}
