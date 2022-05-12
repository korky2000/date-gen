/*Categories and design limitations
Design Limitations and Goals
    Needs
dd        Follow Web Standards
        Can be as specific or as broad as needed
    Wants
        Thumbs up/Down system for dates (thumbs up removes them from array and puts them in a bad date array)
        Suggest dates -> form that ads to date array
   
   */
/*
Price Points
    Cheap $0-$15 (done)
    Mid Level $15-$50
    Expensive $50+
Alcohol?
    Yes
    No
Time
    Night
    Day
Location
    Indoors
    Outdoors

 */
function capFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
//there is a much easier way to do this part lmao
function generateAllCheap() {
    var date1 = [
        "Picnic", "Dollar Store 3 Course Meal", "Switch Off Painting", "Swimming",
        "Hammocking", "Remake 5 min crafts", "Bread Making", "Baking", "Dog Beach", "Find Shells to make a Necklace", "Beach Clean up",
        "Bad Movie Marathon", "Buy a 6 pack and review it after every beer", "Painting 3D Prints", "Mustache Game", "Boyd Hill Hike", "Dungeons and Dragons",
        "Pool", "Bakery", "Put Put Golf", "Strawberry Picking", "Blueberry Picking", "Gelato", "Greys Marathon", "Blanket Fort and Movie", "Poor Man's Comfort Food Dinner", "Flower Arranging",
        "Kites"
    ];

    var name = capFirst(date1[getRandomInt(0, date1.length)]);
    document.getElementById("cheapAll").innerHTML = name;
}
function generateInsideCheap() {
    var date2 = [
        "Dollar Store 3 Course Meal", "Switch Off Painting",
        "Remake 5 min crafts", "Bread Making", "Baking", "Bad Movie Marathon", "Buy a 6 pack and review it after every beer", "Painting 3D Prints", "Mustache Game", "Dungeons and Dragons",
         "Bakery", "Gelato", "Greys Marathon", "Blanket Fort and Movie", "Poor Man's Comfort Food Dinner","Flower Arranging"
    ];

    var name = capFirst(date2[getRandomInt(0, date2.length)]);
    document.getElementById("cheapAll").innerHTML = name;
}
function generateOutsideCheap() {
    var date3 = [
        "Picnic", "Switch Off Painting", "Swimming",
        "Hammocking","Dog Beach", "Find Shells to make a Necklace", "Beach Clean up",
         "Boyd Hill Hike", 
        "Pool", "Put Put Golf", "Strawberry Picking", "Blueberry Picking","Kites","movie in pool"
    ];

    var name = capFirst(date3[getRandomInt(0, date3.length)]);
    document.getElementById("cheapAll").innerHTML = name;
}
function generateAllMed() {
    var date4 = [
        "3 courses at different restaurants", "Painting Pottery", "Brewery", "Trendy Lunch", "Rays Game", "Rowdies Game", "Buying Eachother Outfits at a Thrift Store", "Aquarium", "Zoo",
        "Dali Museum", "Tampa Museum of Art", "Hyde Park", "Sparkmans Wharf", "Vinnoy", "Make Eachother Drinks", "Play in the Park", "See a Play or Musical", "Movie in Theater", "Milkshake Tour of City",
        "Segway Tour","Concert","Drag Show","Drag Bingo","Cook a Fancy Meal","Drive in Movie"
    ];

    var name = capFirst(date4[getRandomInt(0, date4.length)]);
    document.getElementById("cheapAll").innerHTML = name;
}
function generateInsideMed() {
    var date5 = [
        "3 courses at different restaurants", "Painting Pottery", "Brewery", "Trendy Lunch", "Rays Game",  "Buying Eachother Outfits at a Thrift Store", "Aquarium", "Zoo",
        "Dali Museum", "Tampa Museum of Art",  "Vinnoy", "Make Eachother Drinks",  "See a Play or Musical", "Movie in Theater", "Milkshake Tour of City",
        "Segway Tour", "Concert", "Drag Show", "Drag Bingo", "Cook a Fancy Meal"
    ];

    var name = capFirst(date5[getRandomInt(0, date5.length)]);
    document.getElementById("cheapAll").innerHTML = name;
}
function generateOutsideMed() {
    var date6 = [
        "Rowdies Game", "Hyde Park", "Sparkmans Wharf", "Concert", "Play in the Park", "Drive in Movie"
       
    ];

    var name = capFirst(date6[getRandomInt(0, date6.length)]);
    document.getElementById("cheapAll").innerHTML = name;
}
function generateAllExp() {
    var date7 = [
"Cooking Class","Private Goat Yoga","Fancy Restaurant","Bush Gardens","Universal","Air BNB Getaway"
    ];

    var name = capFirst(date7[getRandomInt(0, date7.length)]);
    document.getElementById("cheapAll").innerHTML = name;
}

function generateInsideExp() {
    var date8 = [
        "Cooking Class", "Fancy Restaurant", "Air BNB Getaway"

    ];

    var name = capFirst(date8[getRandomInt(0, date8.length)]);
    document.getElementById("cheapAll").innerHTML = name;
}

function generateOutsideExp() {
    var date9 = [
       "Private Goat Yoga", "Bush Gardens", "Universal"
    ];

    var name = capFirst(date9[getRandomInt(0, date9.length)]);
    document.getElementById("cheapAll").innerHTML = name;
}
//end of a part i could have made better with helper functions. yikes.
//technically they are helper functions they are used elsewhere to avoid work
//i'll fix it later, or not.

function genCheap() {
    var costSelect = document.getElementById('cost');
    var costValue = costSelect.options[costSelect.selectedIndex].value;
    console.log(costValue);
    var sizeSelect = document.getElementById('location');
    var sizeValue = sizeSelect.options[sizeSelect.selectedIndex].value;
    if (costValue == 'cheap' && sizeValue == 'any') {
        generateAllCheap();
    } else if (costValue == 'cheap' && sizeValue == 'inside') {
        generateInsideCheap();
    } else if (costValue == 'cheap' && sizeValue == 'outside') {
        generateOutsideCheap();
    }

}
function genMed() {
    var costSelect = document.getElementById('cost');
    var costValue = costSelect.options[costSelect.selectedIndex].value;
    console.log(costValue);
    var sizeSelect = document.getElementById('location');
    var sizeValue = sizeSelect.options[sizeSelect.selectedIndex].value;
    if (costValue == 'medium' && sizeValue == 'any') {
        generateAllMed();

    } else if (costValue == 'medium' && sizeValue == 'inside') {
        generateInsideMed();
    } else if (costValue == 'medium' && sizeValue == 'outside') {
        generateOutsideMed();
    }

}

function genExp() {
    var costSelect = document.getElementById('cost');
    var costValue = costSelect.options[costSelect.selectedIndex].value;
    console.log(costValue);
    var sizeSelect = document.getElementById('location');
    var sizeValue = sizeSelect.options[sizeSelect.selectedIndex].value;
    if (costValue == 'expensive' && sizeValue == 'any') {
        generateAllExp();

    } else if (costValue == 'expensive' && sizeValue == 'inside') {
        generateInsideExp();
    } else if (costValue == 'expensive' && sizeValue == 'outside') {
        generateOutsideExp();
    }
}
function generateRoom() {
    genCheap();
    genMed();
    genExp();
  
}


