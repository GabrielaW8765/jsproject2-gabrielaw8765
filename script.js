$.ajax({
    url: 'https://data.cityofnewyork.us/resource/f4rp-2kvy.json',
    dataType: 'json',
    success: function(data) {
        console.log(data);
    }
});

alert ("Hey Howdy Hey! Welcome to the CATS Permits Environment Data!"); //intro
var whatBor = prompt("What borough do you want CATS data from?");// make  choices available for certain cities


function userLangu() {
  var catVar = [];
  var answer = whatBor;
  for (i = 0; i < data.length; i++) {
    if(data[i].language_classes == undefined){
      catVar.push("None".split(", "))
      }
  else{
    catVar.push(data[i].language_classes.split(", "));
  }
}
document.write("The CATS data in " + answer  + " have " + catVar + ": <br>");
for (i = 0; i < data.length; i++) {
  for(var j = 0; j < catVa[i].length; j++){
  if (catVar[i][j] == whatBor && data[i].city == whatCity.toUpperCase()){
document.write(data[i].school_name + "<br> ")//Searches for schools with languages that the user wants to take.
      }
    }
  }
};



 


