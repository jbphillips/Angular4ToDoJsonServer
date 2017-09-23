# Angular4ToDoJsonServer
Basic ToDo app using Json placeholder server and Angular 4

The main motive of this app to provide the basics of Angular4 and json-server. 
I will use this work to help solve Basic Authentication problems with ongoing projects.
I need data to manipulate for this. I always depend on backend and to overcome the problem
not always having one, I have learnt json-server and I have used it in this app.

JSON Server is an npm package that you can create a REST JSON webservice. All we need is a JSON file and that will be used as our backend REST.

# Installing JSON Server

You can either install it locally for specific project or globally. I will go with locally.

$ npm install -D json-server

As per the standard convention, I am going to name the file db.json, you can name it as per your needs.


Start the JSON Server

$ json-server --watch db.json

Your JSON Server will be running on port 3000.

Now that we have our server and API running, we can test it and access it with a tool like POSTman

Now we can see that db.json file can make REST webservice. 
