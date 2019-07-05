function myFunction(){
    var temperature = document.getElementById("temp").value;


    if(temperature >= 25){
        alert("Wear t-shirt, shorts and flip flops");
    }else if(temperature>= 11 && temperature <= 15){
        alert("wear a wind breaker a rain coat or a jacket");

    }else if(temperature >=-10 && temperature<=-1){
        alert("dress warmly it's ice cold")
    }


}