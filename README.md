# Planets browser

This is a simple planets-browser page.  
It uses star-wars api, whitch can be found here: swapi.co/api.

### Running the app
App is deployed at https://sazar24.github.io/planets-browser/ .
To run it locally use ``npm start`` or ``ng serve``.

### Main features
+ App downloads data from external server. 
+ Downloaded data - planets' data, to be exact, are listed in table (where user can choose how many rows of data should be displayed at once).
+ Planets can be filtered by names.
+ User can see any planets detail by clicking number of any planet from the list.
+ Navigation is also possible by routes (for example changing planets number in https://sazar24.github.io/planets-browser/planets/16 from "16" to "25")
+ There is a simple progress bar on "Planet List" page showing the progress of downloading data from the server.

### Other...
- It was written in Angular.
- Photo in planets-detail view is just a placeholder.
- It was made mostly for angular-pracices purposes.

##### Still ToDo:
+ implementing some pipes to transform displayed planets details.
+ more photos
+ more colors