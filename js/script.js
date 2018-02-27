function Phone(brand, price, color, year) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.year = year;
}
Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", color is " + this.color + ", the price is " + this.price + " and from " + this.year + " year.");
}
var iPhone6s = new Phone("Apple", 2250, "silver", 2017);
iPhone6s.printInfo();

var samsungGalaxyS6 = new Phone("Samsung", 2000, "gold", 2016);
samsungGalaxyS6.printInfo();

var onePlusOne = new Phone("OnePlus", 1500, "black", 2017);
onePlusOne.printInfo();