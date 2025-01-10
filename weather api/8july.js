
async function datafetch(){
    
    var location=document.getElementById("inp1").value;
    var a=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=99ed8109be9313a5cd83c79def0f7be2&units=metric)`);
var newdiv=document.getElementById("div1");


const data =await a.json();
var img=document.getElementById("img1")
img.style.height="150px";
img.style.width="150px";

var newelement1=document.getElementById("ele1")
var newelement2=document.getElementById("ele2")
var newelement3=document.getElementById("ele3")
var newelement4=document.getElementById("ele4")
var newelement5=document.getElementById("ele5")
var newpara1=document.createElement("p")
newpara1.style.display="inline-block";
var newpara2=document.createElement("p")
newpara2.style.display="inline-block";

newelement1.innerText=data.main.temp;
newelement2.innerText=data.name;
newelement3.innerText=data.coord.lat;
newpara1.innerText="HUMIDITY";
newelement4.innerText=data.main.humidity;
newpara2.innerText="SPEED"
newelement5.innerText=data.wind.speed;

newdiv.appendChild(newelement1)
newdiv.appendChild(newelement2)
newdiv.appendChild(newelement3)
newdiv.appendChild(newpara1)
newdiv.appendChild(newelement4)
newdiv.appendChild(newpara2)
newdiv.appendChild(newelement5)
if(newelement1<300){
    img.src="./asset/misty.jpeg";
}
else{
    img.src="./asset/sunny.jpeg";
}
 
console.log(data);

}
// datafetch()
