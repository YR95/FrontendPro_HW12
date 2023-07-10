fruits = ["grapes", "raspberry", "coconut"]
vegetables = ["cabbage", "avocado", "tomato"]

season = prompt('winter or summer period').toLowerCase().trim();
while (season !== "winter" && season !== "summer") {
    season = prompt('winter or summer period').toLowerCase().trim();
}
good = prompt('fruit or vegetable').toLowerCase().trim();
while (good !== "fruit" && good !== "vegetable") {
    good = prompt('fruit or vegetable').toLowerCase().trim();

}

if (good === 'fruit') {
    goodFr = prompt('choose fruit from category:"grapes", "raspberry", "coconut"').toLowerCase().trim();
    while (goodFr !== "grapes" && goodFr !== "raspberry" && goodFr !== "coconut") {
        goodFr = prompt('choose fruit from category:"grapes", "raspberry", "coconut"').toLowerCase().trim();
    }
} else {
    goodFr = prompt('choose vegetable from category:"cabbage", "avocado", "tomato"').toLowerCase().trim();
    while (goodFr !== "cabbage" && goodFr !== "avocado" && goodFr !== "tomato") {
        goodFr = prompt('choose vegetable from category:"cabbage", "avocado", "tomato"').toLowerCase().trim();
    }
}
quantity = prompt('quantity of good');
while (parseInt(quantity) < 1) {
    quantity = prompt('quantity of good').trim();
}

switch (goodFr) {
    case "grapes" :
        price = 20;
        break;
    case "raspberry":
        price = 25;
        break;
    case "coconut":
        price = 50;
        break;
    case "cabbage" :
        price = 8;
        break;
    case "avocado":
        price = 30;
        break;
    case "tomato":
        price = 10;
        break;
}
koef = (season === "winter") ? 2 : 0.8;
resultPrice = price * quantity * koef;
document.write(`
     <div className="product" align="center">
     <img src='images/${good}/${goodFr}.svg' alt=${goodFr} width="100" height="100">
         <p>Selected product: <b>${goodFr}</b></p>
         <p>Count of cabbages: <b>${quantity}</b></p>
         <p>Selected period: <b>${season}</b></p>
         <p>Selected category: <b>${good}</b></p>
         <p>Final sum: <b>${resultPrice}</b></p>
 </div>`)
