var allRestaurants = [];
var RestMaker = function (delivery,cuisine,bar,cost,title,description,image, address){
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
    var userLibations = $("input[name=libations]:checked").val();
    var userAddress = "123 ave"
    var userPrice = $("select").val();

    if (userPrice !== null && userName !== ""){
      var user = new UserMaker(userDelivery,userCuisine,userLibations,userPrice,userName,userAddress);
      $(".form_content").hide();
      $(".output_content").show();
    } else {
      alert("Please enter a name and price range.");
    }

    $("input[name=cuisine]:checked").each(function(){
      userCuisine.push(this.value);
    })

    // THAI
    var pokPok = new RestMaker(false,"Thai","full-bar",3,"Pok Pok", "Those Wings!", "imgsrc", "234 ave");
    var nongs = new RestMaker(false, "Thai", "beer-wine", 2, "Nongs Khao Man Gai", "Chicken and rice!","imgsrc", "123");

    // JAPANESE
    var bambooSushi = new RestMaker(false,"Japanese","full-bar",3,"Bamboo Sushi", "Good sushi!", "imgsrc", "234 ave");
    var boxerRamen = new RestMaker(false, "Japanese", "beer-wine", 2, "Boxer Ramen", "Great ramen!","imgsrc", "123");

    //CHINESE
    var shandong = new RestMaker(true,"Chinese","full-bar", 1, "Shandong", "Chinese", "imgsrc", "234 ave");
    var hungFarLow = new RestMaker(true,"Chinese","full-bar", 1, "Hung Far Low", "Chinese", "imgsrc", "234 ave");


    //VIETNAMESE
    var mekha = new RestMaker(false, "Vietnamese", "full-bar",1,"Mekha Noodle House", "Vietnamese", "imgsrc", "");
    var lucLac = new RestMaker(false, "Vietnamese", "full-bar", 1, "Luc Lac", "Vietnamese", "imgsrc", "");

    //AMERICAN
    var nedLudd = new RestMaker(false, "American", "full-bar", 3, "Ned Ludd", "American", "imgsrc", "");
    var swiftUnion = new RestMaker(false, "American", "full-bar", 2, "Swift and Union", "American", "imgsrc", "");
    var russellStBbq = new RestMaker(false, "American", "wine-beer", 2, "Russell St. BBQ", "American", "imgsrc", "");

    //MEXICAN
    var azteca = new RestMaker(false, "Mexican", "full-bar", 1, "Burrito Azteca", "Mexican", "imgsrc", "");
    var santeria = new RestMaker(false, "Mexican", "full-bar", 1, "Santeria", "Mexican", "imgsrc", "");
    var santaCruz = new RestMaker(false, "Mexican", "full-bar", 1, "Tacqueria Santa Cruz", "Mexican", "imgsrc", "");
    var nuestraCocina = new RestMaker(false, "Mexican", "full-bar", 3, "Nuestra Cocina", "Mexican", "imgsrc", "");

    allRestaurants.push(bambooSushi, boxerRamen, mekha, lucLac, nedLudd, swiftUnion, russellStBbq, azteca, santeria, santaCruz, nuestraCocina);

    // console.log(user);


    $(".user_name").append(user.userName);

    var liID = 0
    var displayArray = user.dataChecker();
    for(i=0;i<5;i++){
      $("#rest-list").append("<li id='" + liID + "'>" + displayArray[i].restName + "</li>")
      liID ++;
    }
    $(".rest-name").append(user.userName);

    $('li').click(function() {
      if ($(this).children().length === 0){
        $("#"+this.id).append("<ul class='"+this.id+"'></ul>");
        $("."+this.id).append("<li>"+ displayArray[this.id].delivery+"</li>");
        $("."+this.id).append("<li>"+ displayArray[this.id].cost+"</li>");
        $("."+this.id).append("<li>"+ displayArray[this.id].bar+"</li>");
        $("."+this.id).append("<li>"+ displayArray[this.id].cuisine+" food</li>");
        $("."+this.id).append("<li>"+ displayArray[this.id].about+"</li>");
        $("."+this.id).append("<li>"+ displayArray[this.id].address+"</li>");


      }else {
        $(this).children().remove();
      }

    });
  });
});
