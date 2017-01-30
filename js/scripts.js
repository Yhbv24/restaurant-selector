var allRestaurants = [];
var RestMaker = function (delivery,cuisine,bar,cost,description,title,image, address){
  this.delivery = delivery;
  this.bar = bar;
  this.cost = cost;
  this.cuisine = cuisine;
  this.about = description;
  this.restName = title;
  this.image = image;
  this.address = address;
  this.counter = 0;
}

var UserMaker = function (delivery,cuisine,bar,cost, name, address){
  this.delivery = delivery;
  this.bar = bar;
  this.cost = cost;
  this.cuisine = cuisine;
  this.userName = name;
  this.address = address
}

UserMaker.prototype.dataChecker = function(){
  var userKeys = Object.keys(this);
  userKeys.splice(-2);
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < allRestaurants.length;j++) {
      if (this[userKeys[i]] === allRestaurants[j][userKeys[i]]){
        allRestaurants[j].counter++;
      }
    }
  }

  for(k = 0; k<this.cuisine.length;k++){
    for (var l = 0; l < allRestaurants.length;l++) {
      if(this.cuisine[k]===allRestaurants[l].cuisine){
        allRestaurants[l].counter++;
      }
    }
  }

  return allRestaurants.sort(function(a,b){return a.counter - b.counter}).reverse();

}

var user = new UserMaker(true,["Thai","Chinese","Japanese","BBQ"],false,4,"Matt","123 st");
var chinese = new RestMaker(true,"Chinese",false,4,"Chinese Place", "234 ave");
var burger = new RestMaker(false,"Burgers",false,3,"Burger Place", "234 ave");
var japanese = new RestMaker(false,"Japanese",false,4,"japanese Place", "234 ave");

allRestaurants.push(chinese,burger,japanese)
