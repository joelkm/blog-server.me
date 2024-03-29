The complete list of request operations is detailed down below. The MongoDB database is hosted in the cloud with Atlas.

For more info about how is each object stored, you can check the ".mongo.js" file from each model in the "models" folder.

Checking results:
To check the performance, download the repository files, run "npm install" in the project folder to install the required dependencies (you can check them at "package.json") and run "npm run start". Then, use Postman to check the interactions of the API with different endpoints. Every request needs to have application/json as Content-Type in the header of the request.

About the architecture:
"src/" is the main folder for the app files.
"server.js" is the starting point for the application and connection to the database.
"app.js" manages the express middleware (request loggings) and redirects requests to corresponding routers.
"models" contains the files that provide the schemas and manage the data from each model. They interact directly with the database.
"controllers" contains the files that manage requests and transforms the request logic to appropriate data to work with models.

- AUTHORS

  Get Requests:

        - to http://localhost:8000/authors

            Will respond with an Array of Author objects in JSON. You can use their IDs for the next interactions.
            If there are no authors stored, will respond with "No authors found".

        - to http://localhost:8000/authors/:id (:id being the Id string from one author object)

            Will respond with a JSON object matching the specified authors' data.
            If there is no author matching the id, will respond with "No authors found".

        - to http://localhost:8000/authors/:id/blogs

            Will respond with an Array of Blog objects in JSON that contain the specified author's ID.
            If there are no matchs, will respond with "No blogs found".

  Post Request:

        - to http://localhost:8000/authors

            Body must be a JSON object containing the data to post as an author (except the id, which is auto-generated by MongoDB). Will validate that every field is submitted, "name" property is a full name and "email" is a valid email adress.
            Will create the document in the database and respond with it.

  Delete Request:

        - to http://localhost:8000/authors/:id

            Will delete the object matching the id and respond with a succes message.
            If the object does not exist, will respond with a failure message.

- USERS

  Get Requests:

  - to http://localhost:8000/users

        Will respond with an Array of User objects in JSON. You can use their IDs for the next interactions.
        If there are no users stored, will respond with "No users found".

  - to http://localhost:8000/users/:id (:id being the Id string from one user object)

        Will respond with a JSON object matching the specified users' data.
        If there is no user matching the id, will respond with "No users found".

  - to http://localhost:8000/users/:id/comments

        Will respond with an Array of Comment objects in JSON that contain the specified user's ID.
        If there are no matchs, will respond with "No comments found".

  Post Request:

  - to http://localhost:8000/users

        Body must be a JSON object containing the data to post as a user (except the id, which is auto-generated by MongoDB). Will validate that every field is submitted, "name" property is a full name and "email" is a valid email adress.
        Will create the document in the database and respond with it.

  Delete Request:

  - to http://localhost:8000/users/:id

        Will delete the object matching the id and respond with a succes message.
        If the object does not exist, will respond with a failure message.

- BLOGS

  Get Requests:

  - to http://localhost:8000/blogs

          Will respond with an Array of Blog objects in JSON. You can use their IDs for the next interactions.
          If there are no blogs stored, will respond with "No blogs found".

  - to http://localhost:8000/blogs/:id

          Will respond with a JSON object matching the specified blogs' data. It will also increment the viewCount by 1.
          If there is no blog matching the id, will respond with "No blogs found".

  - to http://localhost:8000/blogs/:id/comments

          Will respond with an Array of Comment objects in JSON that contain the specified blog's ID.
          If there are no matchs, will respond with "No comments found".

  Post Request:

  - to http://localhost:8000/blogs

        Body must be a JSON object containing the data to post as a blog (except the viewCount and likeCount, which are set as 0 by default, and id, which is auto-generated by MongoDB). Will validate that every field is submitted and every author matchs an object from the authors collection (the authorsIds field needs to be passed as an Array of the IDs as Strings).
        Will create the document in the database and respond with it.

  Put Requests:

  - to http://localhost:8000/blogs/:id

        Body must be a JSON object containing the data to update the specified blog (the viewCount, likeCount and other values not contained in the request will remain the same). If they need to be updated, will validate that every author matchs an object from the authors collection (the authorsIds field needs to be passed as an Array of the IDs as Strings).
        Will update the document in the database and respond with a success mesage.
        If the object does not exist, will respond with a failure message.

  - to http://localhost:8000/blogs/:id/like

        Will increase the likeCount of the specified blog by 1.
        If the object does not exist, will respond with a failure message.

  Delete Request:

  - to http://localhost:8000/blogs/:id

        Will delete the object matching the id and respond with a succes message.
        If the object does not exist, will respond with a failure message.

- COMMENTS

No get requests since coments are only required in Users and Blogs routes.

    Post Request:

    - to http://localhost:8000/comments

        Body must be a JSON object containing the data to post as a comment (except the id, which is auto-generated by MongoDB). Will validate that every field is submitted and user and blog match an object from the corresponding collections (both are passed as string IDs).
        Will create the document in the database and respond with it.

Put Requests:

    - to http://localhost:8000/comments/:id

        Body must be a JSON object containing the data to update the specified coment (values not contained in the request will remain the same). If they need to be updated, will validate that user and blog match an object from the corresponding collections (both are passed as string IDs).
        Will update the document in the database and respond with a success mesage.
        If the object does not exist, will respond with a failure message.

Delete Request:

    - to http://localhost:8000/comments/:id

        Will delete the object matching the id and respond with a succes message.
        If the object does not exist, will respond with a failure message.
