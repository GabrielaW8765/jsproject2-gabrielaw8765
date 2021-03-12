$.ajax({
    url: 'https://data.cityofnewyork.us/resource/f4rp-2kvy.json',
    dataType: 'json',
    success: function(data) {
        console.log(data);
    }
});

alert ("Hey Howdy Hey! Welcome to the CATS Permits Environment Data!"); //intro
var whatBor = prompt("What borough do you want CATS data from?");// make  choices available for certain cities


function userProm() {
  var catVar = [];
  var answer = whatBor;
  for (i = 0; i < data.length; i++) {
    if(data[i].whatBor_boroughs == undefined){
      catVar.push("None".split(", "))
      }
  else{
    catVar.push(data[i].whatBor_boroughs.split(", "));
  }
}
document.write("The CATS data in " + answer  + " have " + catVar + ": <br>");
for (i = 0; i < data.length; i++) {
  for(var j = 0; j < catVar[i].length; j++){
  if (catVar[i][j] == whatBor && data[i].city == whatBor.toUpperCase()){
document.write(data[i].cats_name + "<br> ")//Searches for CATS with borough that the user wants to take.
      }
    }
  }
};



 


