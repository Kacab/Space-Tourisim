

const hum = document.querySelector('#Hum')
const nav = document.querySelector('.navbar')
let isShow = false
const moon = document.querySelector('.moon')
const planetsInfo = document.querySelector('.planets-info')
const moonName = document.querySelector('#moonName')
const p = document.createElement('p')
const MoonDis =  document.querySelector('#MoonDis')
const p2  = document.createElement('p')
const Moon1 = document.querySelector('#moon1')
const mars = document.querySelector('#mars')
const p3 = document.createElement('p')
const p4 =  document.createElement('p')
const europaName = document.querySelector('#europaName')
const marsName = document.querySelector('#marsName')
const MarsDis = document.querySelector('#MarsDis')
const europa = document.querySelector('#europa')
function MoonInfo() {
    fetch('/starter-code/data.json')
        .then((res) => res.json())
        .then((data) => {
            if (data.destinations.length > 0) {
                const firstName = data.destinations[0].name;
                const moonDescription = data.destinations[0].description;

                // Clear the content before appending
                moonName.innerHTML = '';
                marsName.innerHTML = '';
                europaName.innerHTML = '';

                // Create new elements
                const moonImage = data.destinations[0].images.png
                 console.log(moonImage)
                const imageMoon = document.createElement('img')
                imageMoon.src = moonImage
                console.log(imageMoon)
                moon.style.display = 'block'
                // moon.appendChild(imageMoon)
                const moonNameElement = document.createElement('p');
                const moonDescriptionElement = document.createElement('p');
                moonNameElement.innerText = firstName;
                moonDescriptionElement.innerText = moonDescription;

                // Append new elements
                moonName.appendChild(moonNameElement);
                moonName.appendChild(moonDescriptionElement);

                // Show the Moon section and hide others
                moonName.style.display = 'block';
                marsName.style.display = 'none';
                
            } else {
                console.log('Data not found');
            }
        })
        .catch((error) => {
            console.log('Error:', error);
        });
}

 

function marsInfo() {
    fetch('/starter-code/data.json')
        .then((res) => res.json())
        .then((data) => {
            if (data.destinations.length > 0) {
                const marsNameText = data.destinations[1].name;
                const marsDescription = data.destinations[1].description;

                // Clear the content before appending
                marsName.innerHTML = '';
                moonName.innerHTML = '';
                europaName.innerHTML = ''

                // Create new elements
                const marsNameElement = document.createElement('p');
                const marsDescriptionElement = document.createElement('p');
                marsNameElement.innerText = marsNameText;
                marsDescriptionElement.innerText = marsDescription;
               moon.style.display = 'none'
              
                // Append new elements
                marsName.appendChild(marsNameElement);
                marsName.appendChild(marsDescriptionElement);

                // Show the Mars section and hide others
                marsName.style.display = 'block';
                moonName.style.display = 'none';

            } else {
                console.log('Data not found');
            }
        })
        .catch((error) => {
            console.log('Error:', error);
        });
}


function europaInfo (){
    fetch('/starter-code/data.json')
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
       if(data.destinations.length > 0){
        const EuropaName = data.destinations[2].name
        const europadis  = data.destinations[2].description

        europaName.innerHTML=  '';
        marsName.innerHTML = '';
        moonName.innerHTML = '';
   
        const europanameElement = document.createElement('p')
        const europadiscriptionEllement = document.createElement('p')
    europadiscriptionEllement.innerText  = EuropaName
      europanameElement.innerText = europadis
     marsName.style.display = 'none'
     moonName.style.display = 'none'
      europaName.appendChild(europadiscriptionEllement) 
        europaName.appendChild(europanameElement)
      
        
       }else{
        console.log('data n0t found')
       }
       
    })
    .catch((error)=>{
        console.log(error,'no data foundd')
    })
}


// function titan(){
//     fetch('/starter-code/data.json')
//     .then((res)=>{
//         return res.json()
//     })
//     .then((data)=>{
//       if(data.destinations.length > 0 ){
//       const sec = data.destinations[3].name
//       const  marsDiscription = data.destinations[3].description
//       console.log(sec)
//       console.log(marsDiscription)
//       p3.innerText = sec
//       seven.appendChild(p3)
//       }else{
//         console.log('no')
//       }
//     })
// }







 





function hide(){
    
    nav.style.display = 'none'
    // nav.style.display = 'flex'
    
   

}
function show(){
    nav.style.display ='block'
    }
  

hum.addEventListener('click',function(){
    if(!isShow){
       show()
        isShow = true
    //    console.log(isShow)
       console.log('shown')
    } else{
        isShow = false
        console.log('hidden')
        hide()
    }

    
   
})

Moon1.addEventListener('click',function(){
 MoonInfo()
  
    //six.style.display = 'block'
    
})


mars.addEventListener('click',function(){
   marsInfo()
})


europa.addEventListener('click',function(){
     europaInfo()
    
})