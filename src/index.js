document.addEventListener('DOMContentLoaded', () => {

let term=''//Initializes term to an empty string
const handleQuery = () => {
  term = document.querySelector('#search').value
  //Checks if there is a value exists
  if(!term || term === ''){
    alert('Please enter an artist or song name')//A pop message that will appear of value is empty
  } else {
    const url=`https://itunes.apple.com/search?term=${term}` //A variable to store our API
    const sectionContainer = document.querySelector('#songs')

    //Removes first search data when another search is made
    while(sectionContainer.firstChild){
      sectionContainer.removeChild(sectionContainer.firstChild)
    }
    fetch(url)
     .then((response) => response.json())
     .then((data) => {
    const artists= data.results; // Create artists to data fetched

    //Mapped the results in an array with the specified elements
    return artists.map(result => {
     const sectionContainer = document.querySelector('#songs') 
     const article = document.createElement('article')
     const audio = document.createElement('audio')
     const audioSource = document.createElement('source')
     audioSource.src = result.previewUrl
     audio.controls = true  
     article. innerHTML=`
     <img src=${result.artworkUrl60} alt=${result.artistName}>
     <p>${result.artistName}</p>
     <h4>${result.trackName}</h4>
     `
     article.appendChild(audio);
     audio.appendChild(audioSource); //Allows manipulation of audio controls
     sectionContainer.appendChild(article);// Appends the results depend on the search query to the DOM
       
  })

})
.catch(error => console.log('Request failed:', error))// Writes an error message to the console

  }
}

const searchBtn = document.querySelector('#searchBtn') 

//Click event that activates search query to the API
searchBtn.addEventListener('click', (e) => {
  e.preventDefault();
  handleQuery();
}) 

//Play evennt to stop songs from playing at the same time
document.addEventListener('play', event => {
  const audio = document.getElementsByTagName('audio');
  for (let i = 0; i < audio.length; i++) {
      if (audio[i] != event.target) {
          audio[i].pause();
      }
  }
}, true)

})
  