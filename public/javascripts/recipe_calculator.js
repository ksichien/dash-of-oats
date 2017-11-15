$('input').change(function(){
  for (var i in recipes) {
    var div = '#' + recipes[i].name;
    var ul = document.createElement("ul");
    var qty = document.getElementById('quantity' + i).value;
    for (var key in recipes[i].ingredients) {
      if (recipes[i].ingredients.hasOwnProperty(key)) {
        var li = document.createElement("li");
        var value = recipes[i].ingredients[key];
        li.appendChild(document.createTextNode(value*qty + " " + key));
        ul.appendChild(li);
      }
    };
    $(div).html(ul);
  }
});
