# Food Passport Build week API
### This API was built on short notice so.

## Deployed
https://foodpassword-bw.herokuapp.com/

```/auth/login
/auth/register```

```
"username": "cj",
"password": "i<3Lambd4"```

```POST  /api/rest
{
   "name" - REQUIRED,
   "city_id" - REQUIRED
   "meal": null
   "comment": null
}

GET /api/rest

GET by Id /api/rest/:id

PUT /api/rest/:id
{
   "name" 
   "city_id" 
   "meal"
   "comment"
}

DELETE /api/rest/:id```

```GET /api/passport

POST /api/passport
{
   "city": REQUIRED
}

DELETE /api/passport/:id```
