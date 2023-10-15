# Simple Music Search Application

# Description
The application meets the following deliverables for a user;

1. As a user, I should be able to search for specific songs, albums, or artists.The search results should be accurate and displayed in a user-friendly manner.

2. As a user, I should be able to create and manage playlists.The application should allow me to add songs to playlists and reorder them as needed.

3. As a user, I should be able to provide feedback on songs (e.g., liking, disliking) to improve the recommendations over time."

# Set Up/ Installation 

Clone the repository or download the source code.

Run this command to get the backend started:

```sh
json-server --watch db.json
```

Test your server by visiting this route in the browser:

[http://localhost:3000/playlists](http://localhost:3000/playlists)

Then, open the `index.html` file on your browser to run the application.

**Ensure your internet connection is stable to facilitate smooth connection to `Itunes API`**

## Known Bugs
- One bug that you might encounter in your console while running the application is: `ERR_FILE_NOT_FOUND`. 
  This will mean that the browser you are using is unable to retrieve the file or resource for the particular 
  song you have inquired a search for. This may be due to unstable internet connection.
- After searching a song and adding it to your playlist, you will need to refresh the browser page 
  for the patch  request implemented by `Like button` and delete request implemented by `Delete button` to persist 
  to the server i.e avoiding `404 NOT FOUND` error. Otherwise when one has not queried a search and added a song immediately, it is not a must to refresh the page in order to perform the Patch and Delete requests from your playlist.

## Technologies used
- HTML
- CSS
- Javascript
- Terminal
- Itunes API

## License
MIT License

Copyright (c) 2023 Makanda254

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Acknowledgement
This project was done to establish my personal progress in grasping content related on the three pillars of JavaScript programming namely; Recognizing JavaScript Events, Manipulating the DOM and Communicating with the Server. 

 > **Note that the mentioned pillars are recommended by Flatiron School. 
     It is not must for one to adhere to them.**



## Support and contact details
- email :: victormakanda254@gmail.com
- phone :: +254768918629