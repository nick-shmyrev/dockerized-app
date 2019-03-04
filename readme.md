# JMIR Contacts app
Full-stack application prototype, NOT a fully functioning product.

Allows user to save contact name, phone and address to a DB.

Uses Vue.js, Axios on the Front-end and Node.js, Express, MySQL on the Back-end.

Server routes:
* GET `/` - serves compiled Front-end files.
* GET `/api/contacts` - returns list of existing contacts
* POST `/api/contacts` - saves a new contact  


## Installation instructions

### Database
Import `jmir_contacts.sql` file into DB.

Create DB user and grant all privileges on `jmir_contacts` database. 

Create `./server/config/config.json` file using `example-config.json` as an example. This file will be used to create env variables.

### Client
Run `npm i` to install dependencies.

Run `npm run build` to compile source files.

### Server
Run `npm i` to install dependencies.

Run `npm start` to start server.
