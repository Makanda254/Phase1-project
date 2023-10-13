document.addEventListener('DOMContentLoaded', () => {

let term=''//Initializes term to an empty string
const handleQuery = () => {
  term = document.querySelector('#search').value.toLowerCase()
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
    //A GET request to our API
    fetch(url)
     .then((response) => response.json()) //Changes the response in JSON format
     .then((data) => {
    const artists= data.results; // Create artists to data fetched

    //Mapped the results in an array with the specified elements
    return artists.map(result => {
     const sectionContainer = document.querySelector('#songs') 
     const article = document.createElement('article')
     const audio = document.createElement('audio')
     const audioSource = document.createElement('source')
     const addButton = document.createElement('button')
     addButton.textContent='Add song'
     addButton.classList.add('addBtn')
     audioSource.src = result.previewUrl
     audio.controls = true  
     article. innerHTML=`
     <img src=${result.artworkUrl60} alt=${result.artistName}>
     <p>${result.artistName}</p>
     <h4>${result.trackName}</h4>
     `
     article.appendChild(audio);
     audio.appendChild(audioSource); //Allows manipulation of audio controls
     article.appendChild(addButton);

     sectionContainer.appendChild(article);// Appends the results depending on the search query to the DOM

     addButton.addEventListener('click', (e) =>{
      e.preventDefault
      handlePlaylist(result)
    }) 
       
  })

})
.catch(error => console.log('Request failed:', error))// Writes an error message to the console when a connection failure occurs 

  }
}


const searchBtn = document.querySelector('#searchBtn') 

//Click event that activates search query to the API
searchBtn.addEventListener('click', (e) => {
  e.preventDefault();
  handleQuery();
  form.reset()
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


 function handlePlaylist(song) {
  const playlist = document.getElementById('list');
  const songItem = document.createElement('div');
  const songAudio = document.createElement('audio');
  const songAudioSource = document.createElement('source');
  songAudioSource.src = song.previewUrl
  songAudio.controls = true
  songItem.innerHTML = `
    <ol>
    <p>${song.artistName} - ${song.trackName}</p>
    <ol>
  `;
  songAudio.appendChild(songAudioSource);
  songItem.appendChild(songAudio);
  playlist.appendChild(songItem);

  let songObject = {
    artist:song.artistName,
    song:song.trackName,
    previewUrl:song.previewUrl
  }
  
  function createPlaylist(songObject){
  fetch('http://localhost:3000/playlists',{
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'Accept': 'application/json'
    },
    body:JSON.stringify(songObject)
  })
  .then(res => res.json())
  }

  createPlaylist(songObject)

}
 
     
     





})
  