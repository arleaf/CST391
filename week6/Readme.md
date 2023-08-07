# Activity 6

## Part 3 - External Data Sources

### Stopping Point 3 - Screenshots
![React_music](ReactMusicAllAlbums.png)
Music App connected to our MusicAPI and displays all albums.

![React_music_searc](ReactAlbumSearch.png)
Music App connected to our MusicAPI and displays all albums with matching search phrase 'Abbey'.


### External Data Sources Summary
  In this part of the activity, we transitioned from using an albums JSON, to using our MusicAPI to manage our album data. To do this we used a hook to set our initial album list and update it. We then used the useEffect function to set a new albumList state to update and render the list. We then added a new search functionality. This allows us to search our albums for a phrase.  To do this we added a searchForm component. We then used OnChage and onSubmit handlers to display the state of the component. We used callbacks to pass information from the SearchForm to the handler. We then used the Axios library to move from a JSON to fetching from our API.

## Routing App Demo 
### Screenshots
![About_unlogged](AboutUnloggedIn.png) ![Contact_unlogged](ContactUnloggedIn.png)


Routing App Demo without logging in. 


![About_logged_In](AboutLoggedIn.png) ![Contact_Logged_In](ContactLoggedIn.png)


Routing App demo after login displays the page contents.

### Routing App Demo Summary
  In this demo, we made use of the routing library in React to specify the actions of our app based on the URL in the browser. Firstly, a route is a connection between the browser's URL and the contents of the web page. BrowserRouter uses HTML5 history API to keep your UI in sync with the URL. It is the parent component that is used to store all of the other components. To start we created a app with four components (about, contact, login and PrivateRoute). In our login component , we used the navigate method allowing the code to use routing to navigate to the next application page and location to get the location state. The PrivateRoute is used to protect routes so that unauthorized users are prevented from reaching protected routes. The components protected by PrivateRoute are AboutThisSite and ContactUs.

## Part 4 - Navigation Routing
### Screenshots
![MusicMain](MusicMain.png)
Music Main Application Page. Main link routes to here.

![MusicNew](MusicNew.png)
Music New Page. New link routes to here.

![MusicSearch](MusicSearch.png)
Music Search Fitler Page. Fitlers all albums from API and displays albums with search Phrase.
### Summary
