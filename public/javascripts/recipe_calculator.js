const recipes = [
  {
    'name': 'banana_pancakes',
    'ingredients': {
      'tbs white vinegar': 1,
      'cups unsweetened almond milk': 1,
      'cups rolled oats': 2,
      'medium ripe banana': 1,
      'tsp baking powder': 2,
      'tsp baking soda': 0.5,
      'tsp ground cinnamon': 0.5,
      'tsp salt': 0.5,
      'tbs sugar': 3,
      'tsp vanilla extract': 2
    }
  },
  {
    'name': 'chocolate_babka',
    'ingredients': {
      'cup soy milk': 0.75,
      'tsp instant dry yeast': 2,
      'cup coconut sugar': 0.25,
      'cup flour': 2,
      'tsp salt': 0.5,
      'cup coconut oil, softened': 0.3,
      'tbs vegan butter, softened': 2,
      'cup coconut sugar': 0.5,
      'tbs cacao': 1.5,
      'tsp ground cinnamon': 1,
      'tsp salt': 0.25,
      'tbs coconut oil, softened': 2,
      'tbs vegan butter, softened': 2,
      'cup chocolate chips': 0.3,
      'tbs coconut sugar': 1,
      'tbs water': 1.5
    }
  },
  {
    'name': 'chocolate_cake',
    'ingredients': {
      'cups all-purpose flour': 1.5,
      'tbs cocoa powder': 3,
      'cups sugar': 1,
      'tsp baking soda': 1,
      'tsp salt': 0.5,
      'tsp white vinegar': 1,
      'tsp vanilla extract': 1,
      'tbs vegetable oil': 5,
      'cups water': 1
    }
  },
  {
    'name': 'chocolate_chip_cookies',
    'ingredients': {
      'cups all-purpose flour': 2,
      'tsp baking powder': 1,
      'tsp baking soda': 0.75,
      'tsp fine salt': 0.5,
      'cups dark chocolate chips': 1,
      'cups sugar': 0.5,
      'cups dark brown sugar': 0.5,
      'cups canola oil': 0.5,
      'cups water': 0.25
    }
  },
  {
    'name': 'cinnamon_swirl_cake',
    'ingredients': {
      'cups all-purpose flour': 2.5,
      'tbs cornstarch': 4,
      'tsp baking powder': 1.5,
      'tsp baking soda': 1,
      'tsp salt': 1,
      'cups soy milk': 2,
      'tsp apple cider vinegar': 2,
      'cups canola oil': 0.6,
      'cups granulated sugar': 1.5,
      'tsp vanilla extract': 4,
      'tsp almond extract': 0.5,
      'cups brown sugar': 0.5,
      'tsp cinnamon': 2,
      "cups sifted confectioner's sugar": 1,
      'tbs soy milk': 2,
      'tsp vanilla extract': 1
    }
  },
  {
    'name': 'energy_bars',
    'ingredients': {
      'cups rolled oats': 1,
      'cups pitted oats': 1,
      'cups shredded coconut': 0.25,
      'cups of your chosen ingredients (dried fruit, nuts, seeds)': 0.5,
      'tbs coconut oil': 1
    }
  },
  {
    'name': 'sweet_and_sour_sauce',
    'ingredients': {
      'cup ketchup': 0.25,
      'tsp soy sauce': 0.5,
      'cup white vinegar': 0.25,
      'cup brown sugar': 0.25,
      'cup cold water': 0.5,
      'tbs corn starch': 1.5
    }
  },
  {
    'name': 'teriyaki_sauce',
    'ingredients': {
      'cup soy sauce': 0.5,
      'cup mirin': 0.25,
      'cup sake': 0.25,
      'tbs sugar': 2
    }
  }
]

$('input').change(function () {
  for (let i in recipes) {
    const div = `#${recipes[i].name}`
    const ul = document.createElement('ul')
    const qty = document.getElementById('quantity').value
    for (let key in recipes[i].ingredients) {
      if (recipes[i].ingredients.hasOwnProperty(key)) {
        const li = document.createElement('li')
        const value = recipes[i].ingredients[key]
        li.appendChild(document.createTextNode(`${value * qty} ${key}`))
        ul.appendChild(li)
      }
    }
    $(div).html(ul)
  }
})
