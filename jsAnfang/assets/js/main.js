// var age = prompt('Wie alt bist Du?');
// confirm('Bist Du wirklich ' + age + 'alt?');
// console.log(age);




//CodeFlow Übung lev1_1: conditional-statements punkten

// function checkAge(){
//     console.log("test")
//     let age = document.getElementById("inputAge").value;
//     (age >= 18) ? alert("You Pass") : alert("YOU CAN NOT PASS! ")
// }


//CodeFlow Übung lev1_2: conditional-statements
var quality = document.getElementById("quality");

quality.addEventListener ('click', function() {

    var weather = document.getElementById('weather').value;

    if(weather >= 8 && weather <= 10){
        output.innerHTML = `Super `
    }else if (weather >= 6 && weather <= 8){
        output.innerHTML = `gut `
    }else if(weather >= 3 && weather <= 6 ){
        output.innerHTML = `okay `
    }else if(weather >= 0 && weather <= 3){
        output.innerHTML = `BAD `
    }
    
});