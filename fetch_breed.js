async function logJSONData(id) {
    
    const response = await fetch(`https://api.thedogapi.com/v1/images/${id}`, {
        method: 'GET',
        headers: {
        "x-api-key" : 'live_QTvMfglGZClhoWGzxRd5zbkWpdVyn72i0MRd9UZ984Y6EjPdbJjL95hvO6RQO1t9'
        },
    })
  
    const jsonData = await response.json();
    //Dog Title
    document.getElementById("DogTitle").innerHTML=jsonData.breeds[0].name
    //Dog Temperament 
    document.getElementById("DogT").innerHTML=jsonData.breeds[0].temperament
    //Dog Group
    document.getElementById("DogG").innerHTML=jsonData.breeds[0].breed_group
    //Dog Bred For
    document.getElementById("DogF").innerHTML=jsonData.breeds[0].bred_for

    console.log(jsonData.breeds[0].name)
  
    
  }
  
  let id = "ByIiml9Nm"
  logJSONData(id)