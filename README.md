Chapter 6 Challenge V.0.0.1

Prerequisite
---------------
1. Node Js Installed
2. PostgreSQL Installed (Docker Image or DB Program)
3. Postman Installed

How to Use
----------------
1. Download / Clone this repository.
2. Create user and database in PostgreSQL DB.
3. Run "npm install" from terminal.
4. Create a new .env file with the format of .env_example file according to your database settings.
5. Run npx sequelize-cli db:migrate, this will create a 3 new table in database.
6. Open Postman to test the Rest API.
    - GET : empty query for all user while use username value for query to return a specific user.
    - POST : username and password as Json in the body to create a new user in the table.
    - PUT : input the username as query and the new username and password in Json in the body.
    - DELETE : use the username as query to delte a specific user.


