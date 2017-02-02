var allRestaurants = [];
var RestMaker = function (delivery,cuisine,bar,vibe,cost,title,description,image,address,telephone){
  this.delivery = delivery;
  this.cost = cost;
  this.bar = bar;
  this.cuisine = cuisine;
  this.vibe = vibe;
  this.about = description;
  this.restName = title;
  this.image = image;
  this.address = address;
  this.telephone = telephone;
  this.counter = 0;
};

var UserMaker = function (delivery,cuisine,bar,vibe,cost, name, address){
  this.delivery = delivery;
  this.cost = cost;
  this.vibe = vibe;
  this.bar = bar;
  this.cuisine = cuisine;
  this.userName = name;
  this.address = address;
};

UserMaker.prototype.dataChecker = function(){


  for (var m = 0; m < allRestaurants.length;m++) {
    if (this.delivery === 'true' && allRestaurants[m].delivery) {
      allRestaurants[m].counter += 4;
    }
    if (this.cost == allRestaurants[m].cost) {
      allRestaurants[m].counter += 3;
    }
    if (this.vibe == allRestaurants[m].vibe) {
      allRestaurants[m].counter += 1;
    }

    if(this.bar == "either"){
      allRestaurants[m].counter++;
    }else if(this.bar == allRestaurants[m].bar){
      allRestaurants[m].counter++;
    }
  }
  for(k = 0; k<this.cuisine.length;k++){
    for (var l = 0; l < allRestaurants.length;l++) {
      if(this.cuisine[k]===allRestaurants[l].cuisine){
        allRestaurants[l].counter+=7;
      }
    }
  }

  return allRestaurants.sort(function(a,b){return a.counter - b.counter;}).reverse();

<<<<<<< HEAD
}
//Fake Database

// THAI
var pokPok = new RestMaker(false,"Thai","full-bar", "hip", 3,"Pok Pok", "Those Wings!", "pok_pok.jpg", "3226 SE Division St, Portland, OR 97202", "503-232-1387");
var nongs = new RestMaker(false, "Thai", "beer-wine", "traditional", 2, "Nongs Khao Man Gai", "Chicken and rice!","nong.jpg", "609 SE Ankeny St, Suite C", "503-740-2907");
var beauThai = new RestMaker(true, "Thai", "beer-wine", "hip", 1, "Beau Thai", "Awesome food with delivery late at night. ","beau-thai.jpg", "730 NW 21st ave Portland, OR 97209", "(971) 344-2564");

var khunPics = new RestMaker(false, "Thai", "beer-wine", "traditional", 2, "Khun Pic's", "Seriously authentic","khun-pic.jpg", "3429 SE Belmont St., Portland OR 97214", "503-235-1610");
var langBaan = new RestMaker(false, "Thai", "beer-wine", "fancy", 4, "Langbaan", "Excellent option along SE 28th bustling corridor. ","langbaan.jpg", "6 SE 28th Ave Portland, OR 97214", "(971) 344-2564");


// JAPANESE
var bambooSushi = new RestMaker(false,"Japanese","full-bar", "traditional", 3,"Bamboo Sushi", "Good sushi!", "bamboo.jpg", "310 SE 28th Ave, Portland, OR 97214", "(503) 232-5255");
var boxerRamen = new RestMaker(false, "Japanese", "beer-wine", "hip", 2, "Boxer Ramen", "Great ramen!","boxer.jpg", "1025 SW Stark St, Portland, OR 97205", "(503) 894-8260");
var marukinRamen = new RestMaker(false, "Japanese", "beer-wine", "hip", 2, "Marukin Ramen", "Japanese chain opening up for the first time in Portland.","marukin.jpg", "609 SE Ankeny St. A, Portland, OR 97214", "(503) 894-9021");
var biwa = new RestMaker(false,"Japanese","full-bar", "fancy", 3,"Biwa", "Good sushi!", "biwa.jpg", "215 SE 9th Ave, Portland, OR 97214", "(503) 239-8830");

//CHINESE
var shandong = new RestMaker(true,"Chinese","full-bar", "traditional", 1, "Shandong", "Great Chinese food in the heart of NE Portland Hollywood district.", "shandong.jpg", "3724 NE Broadway St, Portland, OR 97232", "(503) 287-0331");
var hungFarLow = new RestMaker(true,"Chinese","full-bar", "hip", 1, "Hung Far Low", "Relocated to SE 82nd, Hung Far Low still makes solid Chinese food and poors a stiff drink.", "hungfarlow.jpg", "2410 SE 82nd Ave, Portland, OR 97216", "503-223-8686");
var hkCafe = new RestMaker(true,"Chinese","full-bar", "traditional", 2, "HK Cafe", "Great spot for dimsum.", "hkcafe.jpg", "4410 SE 82nd Ave, Portland, OR 97266", "(503) 771-8866");
var goodTaste = new RestMaker(true,"Chinese","full-bar", "traditional" ,1, "Good Taste", "Great Chinese food in the heart of NW China Town.", "goodtaste.jpg", "18 Nw 4th Ave Portland, OR 97209", "(503) 223-3838");
var franksNoodleHouse = new RestMaker(true,"Chinese","beer-wine", "traditional", 1, "Good Taste", "Handmade noodles and an offering of great Korean classics as well.", "franks.jpg", "822 NE Broadway St, Portland, OR 97232", "(503) 288-1007");

//VIETNAMESE
var mekha = new RestMaker(false, "Vietnamese", "full-bar", "traditional", 1,"Mekha Noodle House", "Great place for pho and Cambodian cuisine", "mehka.jpg", "6846 NE Sandy Blvd Portland, OR 97213", "(503) 719-4584");
var lucLac = new RestMaker(false, "Vietnamese", "full-bar", "hip", 2, "Luc Lac", "Hip pot in SW downtown Portland offering a great happy hour and excellent pho.", "luclac.jpg", "835 SW 2nd Ave, Portland, OR 97204" , "(503) 222-0047");
var phoOregon = new RestMaker(false, "Vietnamese", "beer-wine", "traditional", 1,"Pho Oregon", "Great place for pho and Cambodian cuisine", "pho-oregon.jpg", "2518 NE 82nd Ave, Portland, OR 97220", "(503) 262-8816");
var bestBauguette = new RestMaker(false, "Vietnamese", "none", "traditional", 1,"Best Baguette", "Offering not only some of the cheapest, but arguably the best bahn-mi in Portland.", "b-baguette.jpg", "8308 SE Powell Blvd, Portland, OR 97266", "(503) 788-3098");

//AMERICAN
var nedLudd = new RestMaker(false, "American", "full-bar", "hip", 3, "Ned Ludd", "Farm to table ingredients cooked in a woodfire oven prepared with care.", "ned-ludd.jpg", "3925 NE Martin Luther King Jr Blvd, Portland, OR 97212" , "(503) 288-6900");
var swiftUnion = new RestMaker(false, "American", "full-bar", "hip", 2, "Swift and Union", "American", "s-union.jpg", "8103 N Denver Ave, Portland, OR 97217", "(503) 206-4281");
var russellStBbq = new RestMaker(false, "American", "full-bar", "traditional" , 2, "Russell St. BBQ", "American", "russell.jpg", "325 NE Russell St, Portland, OR 97212", "(503) 528-8224");
var theCoop = new RestMaker(false, "American", "full-bar", "hip", 1, "The Coop", "Rotesserie ribs, chicken, and plenty of outdoor seating.", "coop.jpg", "6214 N Interstate Ave, Portland, OR 97217");
var charleysPhilly = new RestMaker(true, "American", "none", "traditional", 1, "Charley's Philly Steaks", "Good Philly Cheese Steaks.", "philly.jpg", "1200 SE 82nd ave Happy Valley, OR 97086");

//MEXICAN
var azteca = new RestMaker(false, "Mexican", "full-bar", "traditional", 1, "Burrito Azteca", "Delicious burritos and margaritas.", "azteca.jpg", "1942 N Rosa Parks Way, Portland, OR 97217", "(503) 841-6667");
var santeria = new RestMaker(false, "Mexican", "full-bar", "hip", 1, "Santeria", "Hidden, just off of SW Broadway, this place is a Portland original.", "santeria.jpg", "703 SW Ankeny St, Portland, OR 97205", "(503) 956-7624");
var santaCruz = new RestMaker(false, "Mexican", "full-bar", "traditional" , 1, "Tacqueria Santa Cruz", "Great place for tacos and burritos in St. John's.", "santa_cruz.jpg", "8630 N Lombard St, Portland, OR 97203", "(503) 289-2005");
var nuestraCocina = new RestMaker(false, "Mexican", "full-bar", "fancy", 3, "Nuestra Cocina", "Get your high-end Mexican cuisine here.", "nuestra.jpg", "2135 SE Division St, Portland, OR 97202", "(503) 232-2135");
=======
};

$(function(){
  $("#button").click(function(){
    $(".splash").hide();
    $(".form_content").show();
  });
  $("form#user_input_form").submit(function(event){
    event.preventDefault();
    var userName = $("input[name=name]").val();
    var userDelivery = $("input[name=delivery]:checked").val();
    var userCuisine = [];
    var userLibations = $("input[name=libations]:checked").val();
    var userAddress = "123 ave";
    var userPrice = $("select[name=price]").val();
    var userVibe = $("input[name=vibe]:checked").val();
    var user;

    if (userPrice !== null && userName !== "" && userVibe !== null){
      allRestaurants = [];
      user = new UserMaker(userDelivery,userCuisine,userLibations,userVibe,userPrice,userName,userAddress);
      $(".form_content").hide();
      $(".output_content").show();
    } else {
      allRestaurants=[];
      alert("Please fill out missing information");
    }

    $("input[name=cuisine]:checked").each(function(){
      userCuisine.push(this.value);
    });


    allRestaurants.push(pokPok, nongs, khunPics, langBaan, shandong, hkCafe, goodTaste, hungFarLow, franksNoodleHouse, bambooSushi, boxerRamen, marukinRamen, biwa, mekha, lucLac, phoOregon, bestBauguette, nedLudd, swiftUnion, russellStBbq, theCoop, azteca, santeria, santaCruz, nuestraCocina, beauThai, charleysPhilly);
    $(".user_name").append(user.userName);

    var liID = 0;
    var displayArray = user.dataChecker();
    for(i=0;i<5;i++){
      $("#rest-list").append("<li id='" + liID + "'>" + displayArray[i].restName + "</li>");
      liID ++;
    }
    $(".rest-name").append(user.userName);

    $('li').click(function() {


      if ($(this).children().length === 0){
        $(this).siblings().children().remove();
        $(this).children().empty();
        $("#img-here").empty();
        $("#img-here").append("<img class='show-image'src='img/"+displayArray[this.id].image+"'></img>");
        $("#"+this.id).append("<ul class='restInfo "+this.id+"'></ul>");

        if(displayArray[this.id].delivery){
          $("."+this.id).append("<li>Delivery: Yes</li>");
        } else {
          $("."+this.id).append("<li>Delivery: No</li>");
        }
        var cost="$";
        for(z=1;z<displayArray[this.id].cost;z++){
          cost+="$";
        }
        $("."+this.id).append("<li>"+ cost+"</li>");
        $("."+this.id).append("<li>Libations: "+ displayArray[this.id].bar+"</li>");
        $("."+this.id).append("<li>"+ displayArray[this.id].cuisine+" food</li>");
        $("."+this.id).append("<li>Description: "+ displayArray[this.id].about+"</li>");
        $("."+this.id).append("<li>Address: "+ displayArray[this.id].address+"</li>");
        $("."+this.id).append("<li>"+ displayArray[this.id].telephone+"</li>");


      }else {
        $(this).children().remove();
        $("#img-here").empty();
      }

    });
  });
});
