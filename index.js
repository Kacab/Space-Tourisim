

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
function MoonInfo(){
    fetch('/starter-code/data.json')
    .then((res)=>{
       return res.json()

    })
    .then((data)=>{
       if(data.destinations.length > 0){
        console.log('its great')
        const firstName = data.destinations[0].name
        const moonDiscription =  data.destinations[0].description
        console.log(moonDiscription)
       p2.innerText = moonDiscription
       p.innerText = firstName
      moonName.appendChild(p)
      moonName.appendChild(p2)
        
       }else{
        console.log('not')
       }
    })

    .catch((Error)=>{
        console.log('Error34')
    })
}


MoonInfo()

function marsInfo(){
    fetch('/starter-code/data.json')
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
      if(data.destinations.length > 0 ){
      const sec = data.destinations[1].name
      const  marsDiscription = data.destinations[1].description
      console.log(sec)
      console.log(marsDiscription)
      marsName.innerText = sec
      marsName.appendChild(p3)
      p4.innerText = MarsDis
      marsDiscription.appendChild(p4)
      }else{
        console.log('no')
      }
    })
}



function europaInfo(){
    fetch('/starter-code/data.json')
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
      if(data.destinations.length > 0 ){
      const third = data.destinations[2].name
      const  marsDiscription = data.destinations[2].description
      console.log(third)
      console.log(marsDiscription)
      europaName.innerText = third
      europaName.appendChild()
      }else{
        console.log('no')
      }
    })
}


function titan(){
    fetch('/starter-code/data.json')
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
      if(data.destinations.length > 0 ){
      const sec = data.destinations[3].name
      const  marsDiscription = data.destinations[3].description
      console.log(sec)
      console.log(marsDiscription)
      p3.innerText = sec
      seven.appendChild(p3)
      }else{
        console.log('no')
      }
    })
}

function remove(){
   if(!isShow){
    console.log('removed')
    moonName.style.display = 'none'
    
    marsInfo()
    isShow = true
   
   }else{
    console.log('put back')
    moonName.style.display = 'block'
    isShow = false
    console.log('put bavk')
   }
}





 





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
//  MoonInfo()
    remove()
    // six.style.display = 'block'

})


mars.addEventListener('click',function(){
    remove()
})


europa.addEventListener('click',function(){
    // europaInfo()
    remove()
})