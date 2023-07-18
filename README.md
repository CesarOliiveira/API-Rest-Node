# Installation

1. **Download dependencies**
```sh
  npm install 
```
2. **Create schema users**
```sh
  npx prisma migrate dev 
```
3. **Start Server**
```sh
  npm run dev
```
## TABLE METHODS

| METHODS | URL|
|--------|-----------|
|POST| http://localhost:3000/users|
|POST| http://localhost:3000/users/login|
|GET|http://localhost:3000/users|
|GET|http://localhost:3000/users/{id}|

## POST Settings

**POST - CREATE USERNAME**

   ```bash
    ## MODEL
       {
          "username": "username",
        	"email": "username@gmail.com",
        	"password": "password"
       }
   ```
```bash
## RESPONSE
 201 - Created
      {
      	"id": "61d8a0d0-d59a-4b54-9754-b1d2f70a974d",
      	"username": "username",
      	"email": "username@gmail.com",
      	"created_at": "2023-07-18T22:31:14.711Z"
      }

    400 - Bad Request
      {
      	"message": "User already exists",
      	"statusCode": 400
      }
```

**LOGIN - User Authentication**

```bash
   ##MODEL
        {
          "email": "username@gmail.com",
          "password": "password"
        }
```

```bash
   ## RESPONSE
   209 - Ok
     {
    	"code": 1,
    	"id": "61d8a0d0-d59a-4b54-9754-b1d2f70a974d",
    	"message": "User Exists"
     }

    404 - NOT FOUND
      {
      	"code": 0,
      	"message": "User NOT Found"
      }
```
     
      
         
    
