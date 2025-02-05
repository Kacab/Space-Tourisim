

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
const titanName = document.querySelector('#titanName')
const TITAN = document.querySelector('#Titan')
const AVG  = document.querySelector('#AVG-distance')
const distnce  = document.querySelector('#estimated-time')
const distnce2  = document.querySelector('#distance')
const days  = document.querySelector('#days')
const marsDiv = document.querySelector('.mars')
const europaDiv = document.querySelector('.europa')
const titanDiv = document.querySelector('.titan')


function MoonInfo() {
fetch('data.json')
.then((res) => res.json())
.then((data) => {
    if (data.destinations.length > 0) {
        // destination data
        const firstName = data.destinations[0].name;
        const moonDescription = data.destinations[0].description;
        const moonDistance1 = data.destinations[0].distance;
        const moonDistance2 = data.destinations[0].travel;

        //crew data
        const role = data.crew[0].role;
      const Douglas = data.crew[0].name;

      const roleHead = document.createElement('h3')
      const douglasHead = document.createElement('h2')

      roleHead.innerText = role
      douglasHead.innerText = Douglas

    //   crewDiv.appendChild(roleHead)
    //   crewDiv.appendChild(douglasHead)
     

      




































       
        // Clear the content before appending
        AVG.innerHTML = ''
        distnce2.innerHTML = ''
        days.innerHTML = ''
        distnce.innerHTML = ''
        moonName.innerHTML = '';
        marsName.innerHTML = '';
        europaName.innerHTML = '';
        titanName.innerHTML = ''
        // Create new elements
        const moonImage = data.destinations[0].images.png;
        console.log('Image URL:', moonImage)
        const imageMoon = document.createElement('img')
        imageMoon.src = moonImage
        marsDiv.style.display = 'none'
        europaDiv.style.display = 'none'
        titanDiv.style.display = 'none'
        
        console.log(imageMoon)
        // moon.appendChild(imageMoon)
        moon.style.display = 'block'
        // moon.appendChild(imageMoon)
        const moonNameElement = document.createElement('p');
        const moonDescriptionElement = document.createElement('p');
        moonNameElement.innerText = firstName;
        
        moonDescriptionElement.innerText = moonDescription;

        const moonAverageDistance = document.createElement('h2')
        const disc = document.createElement('h2')
        const moonDisElement1 = document.createElement('h2')
        const moonTravelDays = document.createElement('h2')
        moonAverageDistance.innerText = 'Average Distance'
        disc.innerText = 'Estimated Travel Time'
        
        moonDisElement1.innerText = moonDistance1
        moonTravelDays.innerText = moonDistance2

        AVG.appendChild(moonAverageDistance)
        distnce2.appendChild(moonDisElement1)
        distnce.appendChild(disc)
        days.appendChild(moonTravelDays)

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

MoonInfo()


function marsInfo() {
fetch('/data.json')
    .then((res) => res.json())
    .then((data) => {
        if (data.destinations.length > 0) {
            const marsNameText = data.destinations[1].name;
            const marsDescription = data.destinations[1].description;
            const marsDistance = data.destinations[1].distance;
            const marsDistance2 = data.destinations[1].travel;
               
            marsDiv.style.display = 'block'
            europaDiv.style.display = 'none'
            titanDiv.style.display = 'none'
            
            
            // Clear the content before appending
            days.innerHTML = ''
            distnce2.innerHTML = ''
            AVG.innerHTML = ''
            distnce.innerHTML = ''  
            marsName.innerHTML = '';
            moonName.innerHTML = '';
            europaName.innerHTML = ''
            titanName.innerHTML = ''

            // Create new elements
            const marsDays = document.createElement('h2')
            const marsTime = document.createElement('h2')
            const marsdistance = document.createElement('h2')
            marsTime.innerText = 'Estimated Travel Time'
            const marsAverageDistance = document.createElement('h2')
            const marsNameElement = document.createElement('p');
            const marsDescriptionElement = document.createElement('p');
            marsNameElement.innerText = marsNameText;
            marsdistance.innerText = marsDistance
            marsAverageDistance.innerText = 'Average Distance'
            marsDays.innerText = marsDistance2
            
            marsDescriptionElement.innerText = marsDescription;
            moon.style.display = 'none'
            
            // Append new elements
            days.appendChild(marsDays)  
            distnce.appendChild(marsTime)
            distnce2.appendChild(marsdistance)
            marsName.appendChild(marsNameElement);
            marsName.appendChild(marsDescriptionElement);

            // Show the Mars section and hide others
            AVG.appendChild(marsAverageDistance)
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
fetch('/data.json')
.then((res)=>{
    return res.json()
})
.then((data)=>{
    if(data.destinations.length > 0){
    const EuropaName = data.destinations[2].name
    const europadis  = data.destinations[2].description
    const europaDist = data.destinations[2].distance
    const europaDist2 = data.destinations[2].travel


europaDiv.style.display = 'block'
marsDiv.style.display = 'none'
titanDiv.style.display = 'none'
moon.style.display = 'none'

    distnce2.innerHTML = ''
    days.innerHTML = ''
    europaName.innerHTML=  '';
    distnce.innerHTML = ''  
    AVG.innerHTML = ''      
    marsName.innerHTML = '';
    moonName.innerHTML = '';
    titanName.innerHTML = ''

    const europAvg  =  document.createElement('h2')
    const europaDys = document.createElement('h2')
    const europaDis = document.createElement('h2')
    const europadist = document.createElement('h2')
    const europanameElement = document.createElement('p')
    const europadiscriptionEllement = document.createElement('p')
europadiscriptionEllement.innerText  = EuropaName
europaDys.innerText = europaDist2
europAvg.innerText = 'Average Distance'
europadist.innerText = 'Estimated Travel Time'
europaDis.innerText = europaDist
    europanameElement.innerText = europadis
    marsName.style.display = 'none'
    moonName.style.display = 'none'
    europaName.appendChild(europadiscriptionEllement) 
    europaName.appendChild(europanameElement)

    AVG.appendChild(europAvg)
    distnce2.appendChild(europaDis)
    distnce.appendChild(europadist)
    days.appendChild(europaDys)
    
    
    }else{
    console.log('data n0t found')
    }
    
})
.catch((error)=>{
    console.log(error,'no data foundd')
})
}


function titanInfo() {
    fetch('/starter-code/data.json')
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log(data.destinations);

            if (data.destinations.length > 0) {
                // Clear existing content
                days.innerHTML = ''
                distnce2.innerHTML = ''
                AVG.innerHTML = ''
                distnce.innerHTML = ''  
                marsName.innerHTML = '';
                moonName.innerHTML = '';
                europaName.innerHTML = ''
                titanName.innerHTML = ''
                moon.style.display = 'none'
    

                // Show the Titan section and hide others
                titanDiv.style.display = 'block';
                marsDiv.style.display = 'none';
                europaDiv.style.display = 'none';


                // Get Titan data
                const titanName1 = data.destinations[3].name;
                const titanDistText = data.destinations[3].description;
                const titanDist = data.destinations[3].distance;
                const titanDist2 = data.destinations[3].travel;

                // Create new elements
                const TitanElementName = document.createElement('p');
                const TitanDisElement = document.createElement('p');
                TitanElementName.innerText = titanName1;
                TitanDisElement.innerText = titanDistText;

                const titanAvg = document.createElement('h2');
                const titanDis = document.createElement('h2');
                const titanDis2 = document.createElement('h2');
                const titanDys = document.createElement('h2');

                titanDis.innerText = titanDist;
                titanDis2.innerText = 'Estimated Travel Time';
                titanDys.innerText = titanDist2;

                titanAvg.innerText = 'Average Distance';

                // Append new elements to the DOM
                titanName.appendChild(TitanElementName);
                titanName.appendChild(TitanDisElement);
                AVG.appendChild(titanAvg);
                distnce2.appendChild(titanDis);
                distnce.appendChild(titanDis2);
                days.appendChild(titanDys);
            }
        })
        .catch((error) => {
            console.error('Error fetching or processing data:', error);
        });
}



// TITAN.addEventListener('click', function () {
//     titanInfo()
//       .then((data) => {
//         console.log('Data is here:', data);
//       })
//       .catch((error) => {
//         console.log('Error occurred:', error);
//       });
//   });
  





 





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
 console.log( 'moon is clicked')
  
    //six.style.display = 'block'
    
})


mars.addEventListener('click',function(){
   marsInfo()
   console.log('mars clicked')
})


europa.addEventListener('click',function(){
     europaInfo()
     console.log('europa clicked')
    
})

TITAN.addEventListener('click', function () {
    console.log('Titan clicked');
    titanInfo()
})

