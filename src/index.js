let query=''
const handleQuery = () => {
  query = document.querySelector('#search').value
  //Checks if there is a value exists
  if(!query || query === ''){
    alert('Please enter an artist or song name')
  } else {
    const url='https://itunes.apple.com/search?term=queen' 
fetch(url)
.then((response) => response.json())
.then((data) => {
  //console.log(data.results)
  const artists= data.results;
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
     article.appendChild(audio)
     sectionContainer.appendChild(article);
       
  })

})
.catch(error => console.log('Request failed:', error))

  }
}



/*const searchBtn = document.getElementById('searchTermBtn') 

searchBtn.addEventListener('click', (e) => {
  e.preventDefault();

})*/
  