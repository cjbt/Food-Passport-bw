# Food Passport Build week API
### This API was built on short notice so.

## Deployed
https://foodpassword-bw.herokuapp.com/

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
