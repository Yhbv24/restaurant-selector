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

UserMaker.prototype.dataChecker(){
  var checkObj = {}
  var userKeys = Object.keys(this);
  userKeys.splice(-2);
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < allRestaurants.length;j++) {
      if (this.[userKeys[i]] === allRestaurants[j][userKeys[i]]){
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

  allRestaurants.sort(function(a,b){return a.counter - b.counter})

}

var user = new UserMaker()
var rest = new RestMaker()
