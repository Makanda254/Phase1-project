document.addEventListener('DOMContentLoaded', () => {

let term=''//Initializes term to an empty string
const handleQuery = () => {

  term = document.querySelector('#search').value.toLowerCase()//stores the value inputed by the user in the term variable

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
    const artists= data.results; // Create artists variable to store data fetched

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


//Function for a post request that creates a playlist object to the server
 function handlePlaylist(song) {
  let songObject = {
    id:'',
    artist:song.artistName,
    song:song.trackName,
    previewUrl:song.previewUrl,
    liked: false
  }

  fetch('http://localhost:3000/playlists',{
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'Accept': 'application/json'
    },
    body:JSON.stringify(songObject)
  })
  .then(res => res.json());

  renderPlaylist(songObject)
  }
 
  //Function to get playlist data
  function fetchPlaylist(){
   fetch('http://localhost:3000/playlists')
   .then(response => response.json())
   .then(data => data.forEach(song => renderPlaylist(song)))

 }

 //A function to render your playlist on the page when you the application is loaded
 function renderPlaylist(playlists){
  const playlist = document.getElementById('list');
  const songItem = document.createElement('div');
  const songAudio = document.createElement('audio');
  const songAudioSource = document.createElement('source');
  songAudioSource.src = playlists.previewUrl
  songAudio.controls = true
   songItem.innerHTML = `
    <p>${playlists.artist} - ${playlists.song}</p>
    <div>

    </div>
   `;

    //Create a like emoji button
    const likeButton = document.createElement('button');
    likeButton.textContent = '❤️ Like'; // Use a heart emoji as the like button
    likeButton.classList.add('likeBtn');

    likeButton.addEventListener('click', () => {
    likeButton.style.color = 'red'; // Turn the button red when liked
    updateLikedSong(playlists); // Call a function to update the server
 });

   const deleteButton = document.createElement('button')
   deleteButton.textContent = 'Delete'
   deleteButton.classList.add('deleteBtn')

   deleteButton.addEventListener('click', () => {
    songItem.remove();
    deleteSong(playlists.id);

   })

  songAudio.appendChild(songAudioSource);
  songItem.appendChild(songAudio);
  songItem.appendChild(likeButton);
  songItem.appendChild(deleteButton);
  playlist.appendChild(songItem);

 }

 //Calls the fetchPlaylist function
 fetchPlaylist()


 // A function for a PATCH request to update the liked song on the server
 function updateLikedSong(songObject) {
  
  fetch(`http://localhost:3000/playlists/${songObject.id}`,{
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      liked: true
    })
  })
    .then(res => res.json())
    .then(data => {
      console.log('Song liked and updated on the server:', data);
    })
    .catch(error => console.error('Failed to update liked song:', error));
}

//Function for a delete request to delete a particular song from the playlist
function deleteSong(id){
 fetch(`http://localhost:3000/playlists/${id}`,{
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
 })
 .then(res => res.json())
 .then((list)=> console.log(list))
}

})
  