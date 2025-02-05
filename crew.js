const crewDiv = document.querySelector('.crew-name-section')





function memberOne(){
  fetch('https://api.spacexdata.com/v4/crew')
    .then(response => response.json())
    .then(data => {
      const crew = data[0]
      console.log(crew.name)
    })
    .catch(error => {
      console.log(error)
    })
}

memberOne()