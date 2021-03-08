// uss = fetch("https://jsonplaceholder.typicode.com/users");
// //console.log(uss)
// uss.then((result) =>
// {
//     //console.log(result);
//     users = result.json();
//     //console.log(users);

//     users.then( (res) =>
//     {
//         //console.log(res[0])
//         for(var i=0;i<10;i++)
//             console.log(res[i].username);
//     }

//     );
// });


//  weather_api = fetch("weather.json");
//  console.log(weather_api);
//  weather_api.then((result)=>
//  {
//      console.log(result);
//      r = result.json();
//      console.log(r);

//      r.then((res)=>
//      {
//         console.log(res);
//         console.log(res.current.cloud)
//         var x = document.getElementById("wear");
//         x.innerHTML ="<h3>Name : " +res.location.name + "</h3> " + 
//         "<h3>Condition : " +res.current.condition.text + "</h3>" +
//         "<h3>Humidity : " +res.current.humidity + "</h3>" +
//         "<h3>Cloud : " +res.current.cloud + "</h3> "   ;
//      }
//      )
    
//  });

function getProp(){
let city = document.getElementById("cityname").value;
var y=document.getElementById("city");
y.innerHTML = "<h2>Weather at "+city+"</h2>"
let weather = fetch("http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=3dd0107503cefb19bbf5bc1b2c2b6a1a");
// console.log(weather);
weather.then((result)=>{
     let res = result.json();
     res.then((finalRes)=>{
        //  console.log(finalRes);
        var x = document.getElementById("wear");
        x.innerHTML = "<h3>Temperature : "+finalRes.main.temp+"k</h3>"+
        "<h3>Feels Like : "+finalRes.main.feels_like+"k</h3>"+
        "<h3>Temperature Minimum : "+finalRes.main.temp_min+"k</h3>"+
        "<h3>Temperature Maximum : "+finalRes.main.temp_max+"k</h3>"+
        "<h3>Pressure : "+finalRes.main.pressure+"</h3>"
        +"<h3>Humidity : "+finalRes.main.humidity+"</h3>"+
        "<h3>Weather Condition : "+finalRes.weather[0].description+"</h3>"

     })
})
}