# Food Passport Build week API
### This API was built on short notice so namings and commits may not be as professional as I'd like. I forgot this was going to be seen by people.

## Deployed
https://foodpassword-bw.herokuapp.com/

`You must do another GET request to obtain the updated items in the restaurant/passport list if you POST, PUT and DELETE them`

## Tech Stack
- Node/express
- knex
- bcrypt
- jsonwebtoken
- sqlite3 Database

### Auth Routes

```
/auth/login
/auth/register
```
### Credentials
```
"username": "cj",
"password": "i<3Lambd4"

"username": "admin",
"password": "admin"
```
### Restaurant Routes
```
POST  /api/rest
Restricted
{
   "name" - REQUIRED,
   "city_id" - REQUIRED
   "meal": null
   "comment": null
}

GET /api/rest
Restricted

GET by Id /api/rest/:id
Restricted

PUT /api/rest/:id
Restricted
{
   "name" 
   "city_id" 
   "meal"
   "comment"
}

DELETE /api/rest/:id
Restricted
```
### Passport Routes
```
GET /api/passport
restricted

POST /api/passport
restricted
{
   "city": REQUIRED
}

DELETE /api/passport/:id
```
