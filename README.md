# POST-Redirect-GET Exercise

## Running the servers
To run, clone the repo, navigate to the root folder and run `npm run start`

This should install all node packages, start the backend and frontend servers and open your browser to `localhost:3000` with the example form running.

To just run the backend or frontend, run `npm run backend` or `npm run frontend` respectively.

## Using the API
To make a call to the API directly, any POST requests should be made to http://localhost:5000/data/form with a body of: 
```JSON
{ "text": "FORM_DATA"}
```

You can also make GET requests via http://localhost:5000/data/form/{ID} to get the data for a specific form from the API, but since this is just an array it will be wiped clean when the server is taken down and brought back up again.

