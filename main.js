
// NUMBER1.
var allPrices = items.map(function(item) {
  return item.price;
});
var sum = allPrices.reduce(function(previous, current){
  return previous + current;
});
var avg = (sum / allPrices.length).toFixed(2);
document.querySelector('#answer1').textContent = "The average price is $" + avg + '.';
//

// NUMBER2.
var list2 = [];
items.filter(function(item){
  if(item.price > 14 && item.price < 18) {
  list2.push(item.title);
}
});

var answer2 = document.querySelector('#answer2');
answer2.innerText = "";

list2.forEach(function(list2){
  answer2.appendChild(document.createTextNode(list2 + '\n'));
});
//

//NUMBER3
var list3 = [];
var list3price = [];

items.filter(function(item){
  if (item.currency_code === "GBP"){
    list3.push(item.title);
    list3price.push(item.price);
  }
});

var answer3 = document.querySelector('#answer3');
answer3.innerText = "";

list3.forEach(function(list3){
  answer3.appendChild(document.createTextNode(list3 + " " + "\u00A3" + list3price + '\n'));
});
//

//NUMBER4
var list4 = [];

items.filter(function(item){
  item.materials.forEach(function(item2){
    if (item2 === "wood"){
      list4.push(item.title)
    }
  });
});

var answer4 = document.querySelector('#answer4');
answer4.innerText = "";

list4.forEach(function(list4){
  answer4.appendChild(document.createTextNode(list4 + '\n' + '\n'))
});
//

//NUMBER5
var answer5 = document.querySelector('#answer5');
answer5.innerText = "";

var filteredItems = items.filter(function(item){
  return (item.materials.length >=8);
});

filteredItems.forEach(function(item){
  var title = item.title;
  var materials = item.materials;
  var length = materials.length;
  answer5.appendChild(document.createTextNode(item.title + " has " + length + " materials.\n\n"));
  materials.forEach(function(material) {
    answer5.appendChild(document.createTextNode(material + '\n'));
  });
});

//NUMBER6
var answer6 = document.querySelector('#answer6');
answer6.innerText = "";
var list6 = [];

items.forEach(function(item){
  var maker = item.who_made;
  if (maker === "i_did"){
    list6.push(item.title);
  }
});
var makerListLength = list6.length;
answer6.appendChild(document.createTextNode(makerListLength + " were made by their sellers."))




