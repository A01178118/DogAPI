async function logJSONData() {
    
  const response = await fetch('https://api.thedogapi.com/v1/images/search?format=json&limit=6&include_breeds=true&has_breeds=true', {
	  method: 'GET',
	  headers: {
      "x-api-key" : 'live_QTvMfglGZClhoWGzxRd5zbkWpdVyn72i0MRd9UZ984Y6EjPdbJjL95hvO6RQO1t9'
	  },
  })

  const jsonData = await response.json();

  // console.log(jsonData) 
  let images = []
  let ids = []
  let names = [] 

  for(let i= 0; i < 6; i++){
    images.push(jsonData[i].url)
    ids.push(jsonData[i].id)
    names.push(jsonData[i].breeds[0].name)

 
  } 

  for(let i= 0; i <= 5; i++){
    document.getElementById("Dog"+(i+1)).src=images[i]
    document.getElementById("Dogname"+(i+1)).innerHTML=names[i]

  }  
  console.log(names)

}


logJSONData()
