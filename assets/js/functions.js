
function checkVeg (ingredients) {
  const noVegIngredients = [
  'mozzarella',
  'salamino piccante',
  'salsiccia',
  'prosciutto cotto',
  'acciughe',
  'grana',
  'scamorza',
  'gorgonzola',
  'montasio'
]
let isVeg = true;
ingredients.forEach(ingredient => {

  if(noVegIngredients.includes(ingredient)){
    isVeg = false
  }
});
return isVeg
}



export {checkVeg}