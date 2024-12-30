const hum = document.querySelector('#Hum')
const nav = document.querySelector('.navbar')
let isShow = false


name1 = false
let hidden = true


 





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
