$('input').change(function () {
  for (let i in recipes) {
    if (document.getElementById(recipes[i].name)) {
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
  }
})
