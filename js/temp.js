document.getElementById('weatherApp').addEventListener('submit', function(e) {
    e.preventDefault();
    var temperature = document.getElementById("temp").value;


    if(temperature >= 17 && temperature <= 40){
        document.getElementById("text").innerHTML = "Wear t-shirt, shorts and flip flops";
    }else if(temperature >= 11 && temperature <= 16 ){
        document.getElementById("text").innerHTML = "wear a wind breaker a rain coat or a jacket";

    }else if(temperature >= 0 && temperature <= 10){
        document.getElementById("text").innerHTML = "dress warmly it's ice cold";
    }else{
        document.getElementById("text").innerHTML = "invalid temperature";
    }    
});

