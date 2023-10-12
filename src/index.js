/*
let term = '';
const updateTerm = () => {
    term = document.getElementById('search').value;
    // check term exist
    if (!term || term === '') {
        alert('Please enter a seach term');
    } else {
        const url = `https://itunes.apple.com/search?term=${term}`;
        const songContainer = document.getElementById('songs');
        while (songContainer.firstChild) {
            songContainer.removeChild(songContainer.firstChild);
        }
        fetch(url)
            .then((Response) => Response.json())
            .then((data) => {
                // console.log(data.results);
                const artists = data.results;
                return artists.map(result => {
                    // Now create Html Element 

                    const article = document.createElement('article'),
                        artists = document.createElement('p'),
                        song = document.createElement('h4'),
                        img = document.createElement('img'),
                        audio = document.createElement('audio'),
                        audioSource = document.createElement('source')

                    // Now put content 

                    artists.innerHTML = result.artistName;
                    song.innerHTML = result.trackName;
                    img.src = result.artworkUrl100;
                    audioSource.src = result.previewUrl;
                    audio.controls = true;

                    article.appendChild(img);
                    article.appendChild(artists);
                    article.appendChild(song);
                    article.appendChild(audio);
                    audio.appendChild(audioSource);

                    songContainer.appendChild(article);
                })
            })
            .catch(error => console.log('Request failed:', error))
    }
}

const searchBtn = document.getElementById('searchTermBtn');
searchBtn.addEventListener('click', updateTerm)

document.addEventListener('play', event => {
    const audio = document.getElementsByTagName('audio');
    for (let i = 0; i < audio.length; i++) {
        if (audio[i] != event.target) {
            audio[i].pause();
        }
    }
}, true)
*/

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

const searchBtn = document.getElementById('searchTermBtn') 

searchBtn.addEventListener('click', (e) => {
  e.preventDefault();

})
  