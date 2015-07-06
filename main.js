



// var FoodItem = function(name, calories, vegan, glutenFree, citrusFree){
	
// 	this.name       = name;
// 	this.calories   = calories;
// 	this.vegan      = vegan;
// 	this.glutenFree = glutenFree;
// 	this.citrusFree = citrusFree;

// }

// var FoodItem2 = new FoodItem('Tofu', 40, true, true, true);
// var FoodItem3 = new FoodItem('Steak Sandwhich', 500, false, false, false);
// var FoodItem4 = new FoodItem('Salad', 300, true, true, false);

//  FoodItem.prototype.toString = function() {

//  	return (this.name + " has " + this.calories + " calories " + " is it vegan? " + this.vegan + " how about gluten free? " + this.glutenFree + " citrus? " + this.citrusFree);


// }

// FoodItem3.toString();



var Drink = function(name, description, price, foodItems){
	
	this.name          = name;
	this.description   = description;
	this.price         = price;
	this.foodItems     = [];

}

// var Soda = new Drink("coke", "super-sweet", "$5.00", ["sugar", "water", "black"])

// Drink.prototype.toString = function() {

// 	this.name = name || " ";
// 	this.description = description || " ";
// 	this.price = price || " ";
// 	this.foodItems = foodItems.join(" ");

// 	return whatever 
// }

// Soda.toString();






var Plate = function(name, description, price, foodItems){
	
	this.name = name || " ";
	this.description = description || " ";
	this.price = price || " ";
	this.foodItems = foodItems;
	

}

var Drink = function(plate){
	
	this.plates = []


}

var Burrito = new Plate("meatBurrito", "tasty", "$10", ["meat", "beans", "queso", "pico"], false )
var Guacomole = new Plate("Guacomole", "green", "$5", ["lime,", "avocado", "onions"])
var Marg = new Drink("coke", "super-sweet", "$5.00", ["sugar", "water", "black"])





// Plate.prototype.toString = function() {

// 	return (this.name + " is very " + this.description + " costs this much money " + this.price + " made of " + this.foodItems);
// }

// Burrito.toString();




// Plate.prototype.isVegan = function() {
// 	var count = 0 
// 	this.foodItems.forEach(function(element) { 
// 		if (element === 'meat') {
//         count++
//     	}
//     	})
//     	if (count > 0) {
//     		return "it is not vegan"
//     	}
//     	else {
//         return "it is vegan"
//    		}
//    	}





// Burrito.isVegan()




var Menu = function(array){
	var array = []
	this.menu = array.Plate

}







var newMenu = new Menu(Burrito, Guacomole, Marg)

// console.log(newMenu)

var Restaurant = function(name, description, menu) { 

	this.name  = name;
	this.description = description;
	this.menu = menu;
}

var newRest = new Restaurant("Picos", "Tex-Mex", newMenu)


Restaurant.prototype.toString = function(){

	return this.name + this.description + this.menu.flatten


}

newRest.toString();





// var Customer = function(dietaryPreference){
	
// 	this.dietaryPreference = dietaryPreference

// }




// FoodItem.prototype.toString = function() {

// 	this.name = name || " ";
// 	this.description = description || " ";
// 	this.price = price || " ";
// 	this.foodItems = foodItems.join(" ");

// }












