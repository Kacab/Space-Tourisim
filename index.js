

const hum = document.querySelector('#Hum')
const nav = document.querySelector('.navbar')
let isShow = false
const moon = document.querySelector('.moon')
const planetsInfo = document.querySelector('.planets-info')
const five = document.querySelector('#Five')
const p = document.createElement('p')
const six  =  document.querySelector('#six')
const p2  = document.createElement('p')
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
      five.appendChild(p)
      six.appendChild(p2)
        
       }else{
        console.log('not')
       }
    })

    .catch((Error)=>{
        console.log('Error34')
    })
}


 MoonInfo()





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
