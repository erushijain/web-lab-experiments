const out=document.getElementById("result");
const cond=c=>c==0?"Clear":c<4?"Cloudy":c<50?"Fog":c<60?"Drizzle":c<70?"Rain":c<80?"Snow":c<90?"Showers":"Thunderstorm";

async function getWeather(){
 const c=document.getElementById("city").value.trim();
 if(!c){out.innerHTML="Please enter a city name";return;}
 try{
  const g=await(await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(c)}&count=1`)).json();
  if(!g.results){out.innerHTML="City not found";return;}
  const{latitude:la,longitude:lo,name,country}=g.results[0];
  const w=(await(await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${la}&longitude=${lo}&current=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m,weather_code&timezone=auto`)).json()).current;
  out.innerHTML=`<b>${name}, ${country}</b><div id="temp">${w.temperature_2m}°C</div>${cond(w.weather_code)}<br>Feels like: ${w.apparent_temperature}°C<br>Humidity: ${w.relative_humidity_2m}%<br>Wind: ${w.wind_speed_10m} km/h<br><small>Updated: ${w.time.replace("T"," ")}</small>`;
 }catch(e){out.innerHTML="Error fetching data";}
}
document.getElementById("city").addEventListener("keypress",e=>{if(e.key=="Enter")getWeather();});