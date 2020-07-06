const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

var city = "";
var temp = "";
var link = "";
var description = "";

app.get('/', function(req, res){
    res.render('index', {place: city, temperature: temp, link: link, description:description}); 
    city = "";
    temp = "";
    link = "";
    description = "";
});

app.post('/', function(req, res){
    url = 'https://api.openweathermap.org/data/2.5/weather?q='+ req.body.query +'&units=metric&appid=b2e813eff26386e19814f73e4f1b7d3a';
    https.get(url, function(response){
        console.log(response.statusCode);
        response.on('data', function(data){
            const map = JSON.parse(data);
            if (map.message === "city not found"){
                res.redirect('https://google.com');
            }
            else{
                city = map.name;
                temp = map.main.temp;
                description = map.weather[0].description;
                link = "http://openweathermap.org/img/wn/"+ map.weather[0].icon +"@2x.png";
                res.redirect('/');
                
            }
        });
    });
}); 



app.listen('3000', function(){
    console.log("Running")
});
