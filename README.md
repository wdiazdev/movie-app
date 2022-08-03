Folder Structure of the project:

1- index.html — contains the HTML layout which defines the element structure that would be shown on the page.
2- style.css- contains CSS code for styling. Using CSS we can style the different portions to make them more visually appealing.
3- script.js — contains Javascript code to fetch the API data and to represent it on browser.

JavaScript logic:

1- getMovies() — A function to fetch movies from API and returns the results using fetch function.The results will be passed to showMovies() function.
2- popularMovies() — A function to showcase the results in the browser which basically inserts the HTML code dynamically.The data to this function is passed from the getMovies() function.
3- An EventListener for search of movies.Once you enter the movie name in the search bar and by clicking on enter will actually submit the form and this event listerner will be triggered.The movie matching the name entered in the search bar will be fetched from the API and it will automatically display all the related title on the list.

CSS Styles:

To manage positioning, size, and color of the elements. Here we are arranging the list of the movies obtained from the API using flex-box. Hovering over the movie banner should actually show the overview of the title.

