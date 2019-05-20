# Dockerized Fullstack App
Take-home interview assignment turned into Docker playground.

The app allows user to save/read/delete contact name, phone and address to/from a DB. 
It consists of:
- Vue.js front-end
- Node.js/Express API
- MySQL database

Given the fact that this app consists of several distinct parts, it proved to be a perfect candidate for 'dockerization'. Dividing the app into separate services made the whole dev environment highly portable and allowed it to be checked into version control system.

 ## Containers schema
 
                |                     |                      |
                |                     |   Vue.js  (client)   |
       Wild     |       Traefik       |                      |   MySQL
     Internet   |   (reverse-proxy)   |   Node.js (server)   |
                |                     |                      |
     
Traefik proxy works as the entry point for the app and routes requests to Vue.js front-end. Additionally, Traefik intercepts all requests to `/api/..` and re-routes them to Node.js server. Node.js uses internal docker network to communicate with the MySQL database. 

This schema lets you fully separate the client from the server while keeping the database isolated from the web and only accessible from inside the docker network. 

## Installation instructions

Install <a href="https://docs.docker.com/install/">Docker</a> & <a href="https://docs.docker.com/compose/install/">Docker Compose</a>.  

Clone this repository & navigate into repo folder.

Run `docker-compose up` to build the containers and start the app.

By default, app will be available at <a href="http://localhost:80">localhost:80</a>.
