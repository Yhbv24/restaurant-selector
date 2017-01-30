var allRestaurants = [];
var RestMaker = function (delivery,cuisine,bar,cost,description,title,image, address){
  this.delivery = delivery;
  this.cost = cost;
  this.bar = bar;
  this.cuisine = cuisine;
  this.about = description;
  this.restName = title;
  this.image = image;
  this.address = address;
  this.counter = 0;
}

var UserMaker = function (delivery,cuisine,bar,cost, name, address){
  this.delivery = delivery;
  this.cost = cost;
  this.bar = bar;
  this.cuisine = cuisine;
  this.userName = name;
  this.address = address
}

UserMaker.prototype.dataChecker = function(){
  var userKeys = Object.keys(this);
  userKeys.splice(-3);
  for (var i = 0; i < 2; i++) {
    for (var j = 0; j < allRestaurants.length;j++) {
      if (this[userKeys[i]] == allRestaurants[j][userKeys[i]]){
        allRestaurants[j].counter++;
      }
    }
  }

  for (var m = 0; m < allRestaurants.length;m++) {
    if(this.bar === "either"){
      allRestaurants[m].counter++
    }else if(this.bar === allRestaurants[m].bar){
      allRestaurants[m].counter++
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

// var user = new UserMaker(true,["Thai","Chinese","Japanese","BBQ"],"either",4,"Matt","123 st");
// var chinese = new RestMaker(true,"Chinese","full-bar",4,"Chinese Place", "234 ave");
// var burger = new RestMaker(false,"Burgers","full-bar",3,"Burger Place", "234 ave");
// var japanese = new RestMaker(false,"Japanese","wine-beer",4,"japanese Place", "234 ave");

// allRestaurants.push(chinese,burger,japanese)


$(function(){
  $("#button").click(function(){
    $(".splash").hide();
    $(".form_content").show();
  })
  $("form#user_input_form").submit(function(event){
    event.preventDefault();
    var userName = $("input[name=name]").val();
    var userDelivery = $("input[name=delivery]:checked").val();
    var userCuisine = [];
    var userPrice = $("select").val();
    var userLibations = $("input[name=libations]:checked").val();
    var userAddress = "123 ave"

    $("input[name=cuisine]:checked").each(function(){
      userCuisine.push(this.value);
    })

    var user = new UserMaker(userDelivery,userCuisine,userLibations,userPrice,userName,userAddress);
    var japanese = new RestMaker(false,"Japanese","wine-beer",4,"japanese Place", "234 ave");
    allRestaurants.push(japanese)

    // console.log(user);
    $(".form_content").hide();
    $(".output_content").show();

    $(".user_name").append(user.userName);


    var displayArray = user.dataChecker();
    console.log(displayArray);
    for(i=0;i<1;i++){
      $("#rest-list").append("<li id='" + displayArray[i].restName + "'>" + displayArray[i].restName + "</li>")
    }
    $(".rest-name").append(user.userName);

    $('li').click(function() {
      console.log("jsdlkfjs");
    });
  });

  // $(document).on('click','li', function() {
  //   console.log("clicked");


  // });
});
