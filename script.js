
    
    var city =""; 
    var APIKey = "15f1b505f3d0eb0bcb509adfccd72a14"; 
    var queryURL ="https://api.openweathermap.org/data/2.5/weather?" +
    "q=nashville,Burundi&units=imperial&appid=" + APIKey;
    
    $.ajax({
        url: queryURL,
        method: "GET"
    })
    
    .then(function(response) {
        console.log(queryURL);
        console.log(response);
    
        $(".city").html("<h1>"+response.name+"</h1>");
        $(".temp").text("Temperature(F):"+response.main.temp);
        $(".wind").text("Wind Speed:"+response.wind.speed);
        $(".humidity").text("Humidity:"+response.main.humidity);
        $(".uvIndex").text("UV Index:"+response.main.uvindex);
    
        var tempF = (response.main.temp - 273.15) * 1.80 + 32;
            $(".tempF").text("Temperature (Kelvin) " + tempF);
    
        console.log("<h1>"+response.name+"</h1>");
        console.log("Temperature(F):"+response.main.temp);
        console.log("Wind Speed:"+response.wind.speed);
        console.log("Humidity:"+response.main.humidity);
        console.log("UV Index:"+response.main.uvindex); 
    
        $(".clickSearch").on("click", function(){
          for (var i= 0; i = city.length; i++) {
            $(".inputSearch") = city;
            $(".clickSearch").on("click",".inputSearch")
          }
        })
    });


    var APIKey = "15f1b505f3d0eb0bcb509adfccd72a14"; 
    var queryURL ="https://api.openweathermap.org/data/2.5/weather?" +
    "q=chicago,Burundi&units=imperial&appid=" + APIKey;

    $.ajax({
      url:queryURL,
      method: "GET"
    })
    
    .then(function(response){
      console.log(queryURL);
        console.log(response);
    
        $(".city1").html("<h1>"+response.name+"</h1>");
        $(".temp1").text("Temperature(F):"+response.main.temp);
        $(".wind1").text("Wind Speed:"+response.wind.speed);
        $(".humidity1").text("Humidity:"+response.main.humidity);
        $(".uvIndex1").text("UV Index:"+response.main.uvindex);
    
        var tempF = (response.main.temp - 273.15) * 1.80 + 32;
            $(".tempF").text("Temperature (Kelvin) " + tempF);
    
        console.log("<h1>"+response.name+"</h1>");
        console.log("Temperature(F):"+response.main.temp);
        console.log("Wind Speed:"+response.wind.speed);
        console.log("Humidity:"+response.main.humidity);
        console.log("UV Index:"+response.main.uvindex); 
    
    })

    var APIKey = "15f1b505f3d0eb0bcb509adfccd72a14"; 
    var queryURL ="https://api.openweathermap.org/data/2.5/weather?" +
    "q=Bangkok,Burundi&units=imperial&appid=" + APIKey;

    $.ajax({
      url:queryURL,
      method: "GET"
    })
    
    .then(function(response){
      console.log(queryURL);
        console.log(response);
    
        $(".city2").html("<h1>"+response.name+"</h1>");
        $(".temp2").text("Temperature(F):"+response.main.temp);
        $(".wind2").text("Wind Speed:"+response.wind.speed);
        $(".humidity2").text("Humidity:"+response.main.humidity);
        $(".uvIndex2").text("UV Index:"+response.main.uvindex);
    
        var tempF = (response.main.temp - 273.15) * 1.80 + 32;
            $(".tempF").text("Temperature (Kelvin) " + tempF);
    
        console.log("<h1>"+response.name+"</h1>");
        console.log("Temperature(F):"+response.main.temp);
        console.log("Wind Speed:"+response.wind.speed);
        console.log("Humidity:"+response.main.humidity);
        console.log("UV Index:"+response.main.uvindex); 
    
    })

    var APIKey = "15f1b505f3d0eb0bcb509adfccd72a14"; 
    var queryURL ="https://api.openweathermap.org/data/2.5/weather?" +
    "q=London,Burundi&units=imperial&appid=" + APIKey;

    $.ajax({
      url:queryURL,
      method: "GET"
    })
    
    .then(function(response){
      console.log(queryURL);
        console.log(response);
    
        $(".city3").html("<h1>"+response.name+"</h1>");
        $(".temp3").text("Temperature(F):"+response.main.temp);
        $(".wind3").text("Wind Speed:"+response.wind.speed);
        $(".humidity3").text("Humidity:"+response.main.humidity);
        $(".uvIndex3").text("UV Index:"+response.main.uvindex);
    
        var tempF = (response.main.temp - 273.15) * 1.80 + 32;
            $(".tempF").text("Temperature (Kelvin) " + tempF);
    
        console.log("<h1>"+response.name+"</h1>");
        console.log("Temperature(F):"+response.main.temp);
        console.log("Wind Speed:"+response.wind.speed);
        console.log("Humidity:"+response.main.humidity);
        console.log("UV Index:"+response.main.uvindex); 
    
    })

    var APIKey = "15f1b505f3d0eb0bcb509adfccd72a14"; 
    var queryURL ="https://api.openweathermap.org/data/2.5/weather?" +
    "q=Munich,Burundi&units=imperial&appid=" + APIKey;

    $.ajax({
      url:queryURL,
      method: "GET"
    })
    
    .then(function(response){
      console.log(queryURL);
        console.log(response);
    
        $(".city4").html("<h1>"+response.name+"</h1>");
        $(".temp4").text("Temperature(F):"+response.main.temp);
        $(".wind4").text("Wind Speed:"+response.wind.speed);
        $(".humidity4").text("Humidity:"+response.main.humidity);
        $(".uvIndex4").text("UV Index:"+response.main.uvindex);
    
        var tempF = (response.main.temp - 273.15) * 1.80 + 32;
            $(".tempF").text("Temperature (Kelvin) " + tempF);
    
        console.log("<h1>"+response.name+"</h1>");
        console.log("Temperature(F):"+response.main.temp);
        console.log("Wind Speed:"+response.wind.speed);
        console.log("Humidity:"+response.main.humidity);
        console.log("UV Index:"+response.main.uvindex); 
    
    })

    var APIKey = "15f1b505f3d0eb0bcb509adfccd72a14"; 
    var queryURL ="https://api.openweathermap.org/data/2.5/weather?" +
    "q=New york,Burundi&units=imperial&appid=" + APIKey;

    $.ajax({
      url:queryURL,
      method: "GET"
    })
    
    .then(function(response){
      console.log(queryURL);
        console.log(response);
    
        $(".city5").html("<h1>"+response.name+"</h1>");
        $(".temp5").text("Temperature(F):"+response.main.temp);
        $(".wind5").text("Wind Speed:"+response.wind.speed);
        $(".humidity5").text("Humidity:"+response.main.humidity);
        $(".uvIndex5").text("UV Index:"+response.main.uvindex);
    
        var tempF = (response.main.temp - 273.15) * 1.80 + 32;
            $(".tempF").text("Temperature (Kelvin) " + tempF);
    
        console.log("<h1>"+response.name+"</h1>");
        console.log("Temperature(F):"+response.main.temp);
        console.log("Wind Speed:"+response.wind.speed);
        console.log("Humidity:"+response.main.humidity);
        console.log("UV Index:"+response.main.uvindex); 
    
    })

    var URL ="http://api.openweathermap.org/data/2.5/uvi?appid={appid}&lat={lat}&lon={lon}"