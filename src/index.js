let term=''
const handleQuery = () => {
  term = document.querySelector('#search').value
  //Checks if there is a value exists
  if(!term || term === ''){
    alert('Please enter an artist or song name')
  } else {
    const url=`https://itunes.apple.com/search?term=${term}` 
    const sectionContainer = document.querySelector('#songs')

    //Removes first search data when another search is made
    while(sectionContainer.firstChild){
      sectionContainer.removeChild(sectionContainer.firstChild)
    }
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
     audio.appendChild(audioSource)
     sectionContainer.appendChild(article);
       
  })

})
.catch(error => console.log('Request failed:', error))

  }
}



const searchBtn = document.querySelector('#searchBtn') 

searchBtn.addEventListener('click', (e) => {
  e.preventDefault();
  handleQuery();
}) 
  