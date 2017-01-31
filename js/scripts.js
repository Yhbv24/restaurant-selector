var allRestaurants = [];
var RestMaker = function (delivery,cuisine,bar,cost,title,description,image,address,telephone){
  this.delivery = delivery;
  this.cost = cost;
  this.bar = bar;
  this.cuisine = cuisine;
  this.about = description;
  this.restName = title;
  this.image = image;
  this.address = address;
  this.telephone = telephone;
  this.counter = 0;
}

var UserMaker = function (delivery,cuisine,bar,cost, name, address){
  this.delivery = delivery;
  this.cost = cost;
  this.bar = bar;
  this.cuisine = cuisine;
  this.userName = name;
  this.address = address;
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
      allRestaurants = [];
      var user = new UserMaker(userDelivery,userCuisine,userLibations,userPrice,userName,userAddress);
      $(".form_content").hide();
      $(".output_content").show();
    } else {
      allRestaurants=[];
      alert("Please enter a name and price range.");
    }

    $("input[name=cuisine]:checked").each(function(){
      userCuisine.push(this.value);
    })

    // THAI
    var pokPok = new RestMaker(false,"Thai","full-bar",3,"Pok Pok", "Those Wings!", "imgpokpok", "3226 SE Division St, Portland, OR 97202", "503-232-1387");
    var nongs = new RestMaker(false, "Thai", "beer-wine", 2, "Nongs Khao Man Gai", "Chicken and rice!","nong.jpg", "609 SE Ankeny St, Suite C", "503-740-2907");
    var khunPics = new RestMaker(false, "Thai", "beer-wine", 2, "Khun Pic's", "Seriously authentic","khun-pic.img", "3429 SE Belmont St., Portland OR 97214", "503-235-1610");
    var nongs = new RestMaker(false, "Thai", "beer-wine", 2, "Nongs Khao Man Gai", "Chicken and rice!","imgsrc", "609 SE Ankeny St, Suite C", "503-740-2907");

    // JAPANESE
    var bambooSushi = new RestMaker(false,"Japanese","full-bar",3,"Bamboo Sushi", "Good sushi!", "bamboo.jpg", "310 SE 28th Ave, Portland, OR 97214", "(503) 232-5255");
    var boxerRamen = new RestMaker(false, "Japanese", "beer-wine", 2, "Boxer Ramen", "Great ramen!","boxer.jpg", "1025 SW Stark St, Portland, OR 97205", "(503) 894-8260");
    var marukinRamen = new RestMaker(false, "Japanese", "beer-wine", 2, "Marukin Ramen", "Japanese chain opening up for the first time in Portland.","marukin.jpg", "609 SE Ankeny St. A, Portland, OR 97214", "(503) 894-9021");
    var biwa = new RestMaker(false,"Japanese","full-bar",3,"Bamboo Sushi", "Good sushi!", "biwa.jpg", "215 SE 9th Ave, Portland, OR 97214", "(503) 239-8830");


    //CHINESE
    var shandong = new RestMaker(true,"Chinese","full-bar", 1, "Shandong", "Great Chinese food in the heart of NE Portland Hollywood district.", "shandong.jpg", "3724 NE Broadway St, Portland, OR 97232", "(503) 287-0331");
    var hungFarLow = new RestMaker(true,"Chinese","full-bar", 1, "Hung Far Low", "Relocated to SE 82nd, Hung Far Low still makes solid Chinese food and poors a stiff drink.", "hungfarlow.jpg", "2410 SE 82nd Ave, Portland, OR 97216", "503-223-8686");
    var hkCafe = new RestMaker(true,"Chinese","full-bar", 2, "HK Cafe", "Great spot for dimsum.", "hkcafe.jpg", "4410 SE 82nd Ave, Portland, OR 97266", "(503) 771-8866");
    var goodTaste = new RestMaker(true,"Chinese","full-bar", 1, "Good Taste", "Great Chinese food in the heart of NW China Town.", "goodtaste.jpg", "18 Nw 4th Ave Portland, OR 97209", "(503) 223-3838");
    var franksNoodleHouse = new RestMaker(true,"Chinese","beer-wine", 1, "Good Taste", "Handmade noodles and an offering of great Korean classics as well.", "franks.jpg", "822 NE Broadway St, Portland, OR 97232", "(503) 288-1007");



    //VIETNAMESE
    var mekha = new RestMaker(false, "Vietnamese", "full-bar",1,"Mekha Noodle House", "Great place for pho and Cambodian cuisine", "mekha.jpg", "6846 NE Sandy Blvd Portland, OR 97213", "(503) 719-4584");
    var lucLac = new RestMaker(false, "Vietnamese", "full-bar", 2, "Luc Lac", "Hip pot in SW downtown Portland offering a great happy hour and excellent pho.", "luclac.jpg", "835 SW 2nd Ave, Portland, OR 97204" , "(503) 222-0047");
    var phoOregon = new RestMaker(false, "Vietnamese", "beer-wine",1,"Pho Oregon", "Great place for pho and Cambodian cuisine", "pho-oregon.jpg", "2518 NE 82nd Ave, Portland, OR 97220", "(503) 262-8816");
    var bestBauguette = new RestMaker(false, "Vietnamese", "none",1,"Best Baguette", "Offering not only some of the cheapest, but arguably the best bahn-mi in Portland.", "b-baguette.jpg", "8308 SE Powell Blvd, Portland, OR 97266", "(503) 788-3098");


    //AMERICAN
    var nedLudd = new RestMaker(false, "American", "full-bar", 3, "Ned Ludd", "American", "imgsrc", "");
    var swiftUnion = new RestMaker(false, "American", "full-bar", 2, "Swift and Union", "American", "imgsrc", "");
    var russellStBbq = new RestMaker(false, "American", "wine-beer", 2, "Russell St. BBQ", "American", "imgsrc", "");
    var theCoop = new RestMaker(false, "American", "full-bar", 1, "The Coop", "Rotesserie ribs, chicken, and plenty of outdoor seating.", "imgsrc", "");

    //MEXICAN
    var azteca = new RestMaker(false, "Mexican", "full-bar", 1, "Burrito Azteca", "Mexican", "imgsrc", "");
    var santeria = new RestMaker(false, "Mexican", "full-bar", 1, "Santeria", "Mexican", "imgsrc", "");
    var santaCruz = new RestMaker(false, "Mexican", "full-bar", 1, "Tacqueria Santa Cruz", "Mexican", "imgsrc", "");
    var nuestraCocina = new RestMaker(false, "Mexican", "full-bar", 3, "Nuestra Cocina", "Mexican", "imgsrc", "");

    allRestaurants.push(pokPok, nongs, shandong, hungFarLow, bambooSushi, boxerRamen, mekha, lucLac, nedLudd, swiftUnion, russellStBbq, azteca, santeria, santaCruz, nuestraCocina);

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
        $("#"+this.id).append("<ul class='restInfo "+this.id+"'></ul>");

        if(displayArray[this.id].delivery){
          $("."+this.id).append("<li>Delivery: Yes</li>");
        } else {
          $("."+this.id).append("<li>Delivery: No</li>");
        }
        var cost="$";
        for(z=1;z<displayArray[this.id].cost;z++){
          cost+="$"
        }
        $("."+this.id).append("<li>"+ cost+"</li>");
        $("."+this.id).append("<li>Libations: "+ displayArray[this.id].bar+"</li>");
        $("."+this.id).append("<li>"+ displayArray[this.id].cuisine+" food</li>");
<<<<<<< HEAD
        $("."+this.id).append("<li>"+ displayArray[this.id].about+"</li>");
        $("."+this.id).append("<li>"+ displayArray[this.id].address+"</li>");
        $("."+this.id).append("<li>"+ displayArray[this.id].telephone+"</li>");
=======
        $("."+this.id).append("<li>Description: "+ displayArray[this.id].about+"</li>");
        $("."+this.id).append("<li>Address: "+ displayArray[this.id].address+"</li>");
>>>>>>> 23b1cac4943fd54c0ccb8a004e0eaf60170e60df


      }else {
        $(this).children().remove();
      }

    });
  });
});
