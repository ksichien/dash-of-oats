const recipes = [
  {
    'name': 'banana_pancakes',
    'ingredients': {
      ' tbs white vinegar': 1,
      ' cups unsweetened almond milk': 1,
      ' cups rolled oats': 2,
      ' medium ripe banana': 1,
      ' tsp baking powder': 2,
      '/2 tsp baking soda': 1,
      '/2 tsp ground cinnamon': 1,
      '/2 tsp salt': 1,
      ' tbs sugar': 3,
      ' tsp vanilla extract': 2
    }
  },
  {
    'name': 'chocolate_babka',
    'ingredients': {
      '/4 cups soy milk [dry]': 3,
      ' tsp instant dry yeast [dry]': 2,
      '/4 cups coconut sugar [dry]': 1,
      ' cups flour [dry]': 2,
      '/2 tsp salt [dry]': 1,
      '/3 cups coconut oil, softened [dry]': 1,
      ' tbs vegan butter, softened [dry]': 2,
      '/2 cups coconut sugar [wet]': 1,
      ' tbs cacao [wet]': 1.5,
      ' tsp ground cinnamon [wet]': 1,
      '/4 tsp salt [wet]': 1,
      ' tbs coconut oil, softened [wet]': 2,
      ' tbs vegan butter, softened [wet]': 2,
      '/3 cups chocolate chips [wet]': 1,
      ' tbs coconut sugar [glazing]': 1,
      ' tbs water [glazing]': 1.5
    }
  },
  {
    'name': 'chocolate_cake',
    'ingredients': {
      ' cups all-purpose flour': 1.5,
      ' tbs cocoa powder': 3,
      ' cups sugar': 1,
      ' tsp baking soda': 1,
      '/2 tsp salt': 1,
      ' tsp white vinegar': 1,
      ' tsp vanilla extract': 1,
      ' tbs vegetable oil': 5,
      ' cups water': 1
    }
  },
  {
    'name': 'chocolate_chip_cookies',
    'ingredients': {
      ' cups all-purpose flour': 2,
      ' tsp baking powder': 1,
      '/4 tsp baking soda': 3,
      '/2 tsp fine salt': 1,
      ' cups dark chocolate chips': 1,
      '/2 cups sugar': 1,
      '/2 cups dark brown sugar': 1,
      '/2 cups canola oil': 1,
      '/4 cups water': 1
    }
  },
  {
    'name': 'cinnamon_swirl_cake',
    'ingredients': {
      ' cups all-purpose flour [dry]': 2.5,
      ' tbs cornstarch [dry]': 4,
      ' tsp baking powder [dry]': 1.5,
      ' tsp baking soda [dry]': 1,
      ' tsp salt [dry]': 1,
      ' cups soy milk [wet]': 2,
      ' tsp apple cider vinegar [wet]': 2,
      '/3 cups canola oil [wet]': 2,
      ' cups granulated sugar [wet]': 1.5,
      ' tsp vanilla extract [wet]': 4,
      '/2 tsp almond extract [wet]': 1,
      '/2 cups brown sugar [filling]': 1,
      ' tsp cinnamon [filling]': 2,
      " cups sifted confectioner's sugar [glazing]": 1,
      ' tbs soy milk [glazing]': 2,
      ' tsp vanilla extract [glazing]': 1
    }
  },
  {
    'name': 'energy_bars',
    'ingredients': {
      ' cups rolled oats': 1,
      ' cups pitted oats': 1,
      '/4 cups shredded coconut': 1,
      '/2 cups of your chosen ingredients (dried fruit, nuts, seeds)': 1,
      ' tbs coconut oil': 1
    }
  },
  {
    'name': 'sweet_and_sour_sauce',
    'ingredients': {
      '/4 cups ketchup': 1,
      '/2 tsp soy sauce': 1,
      '/4 cups white vinegar': 1,
      '/4 cups brown sugar': 1,
      '/2 cups cold water': 1,
      ' tbs corn starch': 1.5
    }
  },
  {
    'name': 'teriyaki_sauce',
    'ingredients': {
      '/2 cups soy sauce': 1,
      '/4 cups mirin': 1,
      '/4 cups sake': 1,
      ' tbs sugar': 2
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
        li.appendChild(document.createTextNode(`${value * qty}${key}`))
        ul.appendChild(li)
      }
    }
    $(div).html(ul)
  }
})
